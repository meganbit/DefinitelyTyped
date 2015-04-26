/// <reference path="./vinyl-buffer.d.ts"/>
/// <reference path="../gulp/gulp.d.ts"/>
/// <reference path="../browserify/browserify.d.ts"/>
/// <reference path="../vinyl-source-stream/vinyl-source-stream.d.ts"/>

import gulp = require("gulp");
import browserify = require('browserify');
import buffer = require('vinyl-buffer');
import source = require('vinyl-source-stream')

var uglify = require('gulp-uglify')
var size = require('gulp-size')

gulp.task('build', function() {
  var bundler = browserify('./index.js');

  return bundler.bundle()
    .pipe(source('index.ts'))
    .pipe(buffer())
    .pipe(gulp.dest('dist/'))
})
