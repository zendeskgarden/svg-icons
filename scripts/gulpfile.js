/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const config = require('./config');
const file = require('gulp-file');
const fs = require('node:fs');
const gulp = require('gulp');
const path = require('node:path');
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

gulp.task('stories/12px', () => {
  const indexJS = toJS('src/12');

  return file('12px.js', indexJS, { src: true }).pipe(gulp.dest('src/.stories'));
});

gulp.task('stories/16px', () => {
  const indexJS = toJS('src/16');

  return file('16px.js', indexJS, { src: true }).pipe(gulp.dest('src/.stories'));
});

gulp.task('stories', gulp.parallel('stories/12px', 'stories/16px'));

const source = path.join('src', '**', '*.svg');

gulp.task('dist', () => {
  return gulp.src(source).pipe(svgSprite(config)).pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.parallel('dist', 'stories'));

gulp.task('watch', () => {
  gulp.watch(source, gulp.parallel('default'));
});
