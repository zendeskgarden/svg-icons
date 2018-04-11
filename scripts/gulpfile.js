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
        const id = config.shape.id.generator.replace(/%s/g, suffix);

        retVal.push(`'${id}'`);
      }
    });

    return retVal;
  };
  const files = fs.readdirSync(source);

  return `Garden.svgIDs = [\n  ${toIds(files).join(',\n  ')}\n];\n`;
}

gulp.task('demo/12px', () => {
  const indexJS = toJS('src/12');

  return file('index.js', indexJS, { src: true })
    .pipe(gulp.dest('demo/12px'));
});

gulp.task('demo/14px', () => {
  const indexJS = toJS('src/14');

  return file('index.js', indexJS, { src: true })
    .pipe(gulp.dest('demo/14px'));
});

gulp.task('demo/16px', () => {
  const indexJS = toJS('src/16');

  return file('index.js', indexJS, { src: true })
    .pipe(gulp.dest('demo/16px'));
});

gulp.task('demo/26px', () => {
  const indexJS = toJS('src/26');

  return file('index.js', indexJS, { src: true })
    .pipe(gulp.dest('demo/26px'));
});

gulp.task('demo', gulp.parallel(
  'demo/12px',
  'demo/14px',
  'demo/16px',
  'demo/26px'
));

const source = path.join('src', '**', '*.svg');

gulp.task('dist', () => {
  return gulp
    .src(source)
    .pipe(svgSprite(config))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.parallel('dist', 'demo'));

gulp.task('watch', () => {
  gulp.watch(source, gulp.parallel('default'));
});
