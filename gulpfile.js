var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var rename = require('gulp-rename');
var watchify = require('watchify');
var gutil = require('gulp-util');

gulp.task('scripts', function () {
  var bundler = browserify('./dist/build.js');
  bundler.transform(reactify);
  var stream = bundler.bundle();
  return stream
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watchScripts', function(){
	gulp.watch(['./src/**/*.js','./dist/build.js'], ['scripts']);
});



