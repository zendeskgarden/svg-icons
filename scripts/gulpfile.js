/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const config = require('./config');
const file = require('gulp-file');
const fs = require('fs');
const gulp = require('gulp');
const path = require('path');
const svgSprite = require('gulp-svg-sprite');
const through2 = require('through2');
const { transform } = require('@svgr/core');
const rename = require('gulp-rename');
const flatten = require('gulp-flatten');

/**
 * Convert the given directory of SVG files to an array of SVG IDs.
 *
 * @param {String} source Directory of source SVGs.
 *
 * @returns {String} `Garden.svgIDs = [files-to-IDs];`
 */
function toJS(source) {
  const dimension = source.split(path.sep).pop();
  const toIds = _files => {
    const retVal = [];

    _files.forEach(_file => {
      if (_file.endsWith('.svg')) {
        const basename = path.basename(_file, '.svg');
        const suffix = `${dimension}${config.shape.id.separator}${basename}`;
        const id = config.shape.id.generator.replace(/%s/gu, suffix);

        retVal.push(`'${id}'`);
      }
    });

    return retVal;
  };
  const files = fs.readdirSync(source);

  return `/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export const SVGs = [\n  ${toIds(files).join(',\n  ')}\n];\n`;
}

const sanitizeCamelCase = name => (/\d/u.test(name.charAt(0)) ? `_${name}` : name);

/**
 * Convert the given directory of React components to an index file exporting all of them
 *
 * @param {String} source Directory of source components.
 *
 * @returns {String} index file exporting all the components
 */
function toIndexFile(source) {
  const files = fs.readdirSync(source);
  const componentNames = [];

  files.forEach(_file => {
    if (_file.endsWith('.js')) {
      const basename = path.basename(_file, '.js');

      componentNames.push(basename);
    }
  });

  return `/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
${componentNames
  .map(name => `import ${sanitizeCamelCase(name)} from '../../${source}/${name}'`)
  .join('\n')}

export const IconComponents = {
  ${componentNames.map(sanitizeCamelCase).join(',\n  ')}
}
`;
}

gulp.task('stories/12px', () => {
  const indexJS = toJS('src/12');

  return file('12px.js', indexJS, { src: true }).pipe(gulp.dest('src/.stories'));
});

gulp.task('stories/16px', () => {
  const indexJS = toJS('src/16');

  return file('16px.js', indexJS, { src: true }).pipe(gulp.dest('src/.stories'));
});

gulp.task('stories/26px', () => {
  const indexJS = toJS('src/26');

  return file('26px.js', indexJS, { src: true }).pipe(gulp.dest('src/.stories'));
});

gulp.task('stories/components', () => {
  const indexJS = toIndexFile('dist/components');

  return file('components.js', indexJS, { src: true }).pipe(gulp.dest('src/.stories'));
});

gulp.task(
  'stories',
  gulp.parallel('stories/12px', 'stories/16px', 'stories/26px', 'stories/components')
);

const source = path.join('src', '**', '*.svg');

gulp.task('dist/sprite', () => {
  return gulp.src(source).pipe(svgSprite(config)).pipe(gulp.dest('dist'));
});

const transformToComponent = svgCode =>
  transform.sync(
    svgCode,
    {
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
      index: false,
      svgoConfig: './svgo.config.js',
      prettierConfig: './.prettierrc'
    },
    { componentName: 'ReactIcon' }
  );

const toCamelCase = text => {
  return text
    .replace(/(?:^\w|[A-Z]|\b\w)/gu, leftTrim => leftTrim.toUpperCase())
    .replace(/\s+/gu, '')
    .replace(/-/gu, '');
};

gulp.task('dist/components', () => {
  return gulp
    .src(source)
    .pipe(
      rename(filePath => ({
        ...filePath,
        basename: toCamelCase(filePath.basename),
        extname: '.js'
      }))
    )
    .pipe(
      through2.obj((svgFile, _, cb) => {
        if (svgFile.isBuffer()) {
          const reactCode = transformToComponent(svgFile.contents.toString(), svgFile.name);

          svgFile.contents = Buffer.from(reactCode);
        }
        cb(null, svgFile);
      })
    )
    .pipe(flatten())
    .pipe(gulp.dest('dist/components/', { overwrite: true }));
});

gulp.task('dist', gulp.parallel('dist/sprite', 'dist/components'));

gulp.task('default', gulp.series('dist', 'stories'));

gulp.task('watch', () => {
  gulp.watch(source, gulp.parallel('default'));
});
