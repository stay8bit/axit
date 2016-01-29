'use strict';

// variables
var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');


// static server
gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: "./build/"
		}
	});
});

// html
gulp.task('html', function () {
	return gulp.src('./src/*.html')
		.pipe(gulp.dest('./build/'));
});


// css
gulp.task('css', function () {
	return gulp.src('./src/sass/*.sass')
		.pipe(sass())
		.pipe(concatCss("styles.min.css"))
		.pipe(autoprefixer())
		.pipe(cssnano())
		.pipe(gulp.dest('./build/css/'));
});

// js
gulp.task('js', function () {
	return gulp.src('./src/script/*.js')
		.pipe(gulp.dest('./build/script/'));
});

// images
gulp.task('img', function () {
	return gulp.src('./src/images/*.*')
		.pipe(gulp.dest('./build/images/'));
});


// watcher
gulp.task('watch', function () {
	gulp.watch('./src/*.html', ['html', browserSync.reload]);
	gulp.watch('./src/sass/*.sass', ['css', browserSync.reload]);
	gulp.watch('./src/script/*.js', ['js', browserSync.reload]);
	gulp.watch('./src/images/*.*', ['img', browserSync.reload]);
});


// default task
gulp.task('default', ['html', 'css', 'js', 'img', 'watch', 'browser-sync']);