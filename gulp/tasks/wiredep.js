'use strict';

var gulp = require('gulp-help')(require('gulp'));
var wiredep = require('wiredep').stream;

var config = require('./../config.js');

// Inject bower components to sass
gulp.task('wiredep:sass', 'Inject Bower dependencies to Sass', function() {
  return gulp.src(config.wiredep.sass.src)
    .pipe(wiredep(config.wiredep.sass.cfg))
    .pipe(gulp.dest(config.wiredep.sass.dest));
});

// Inject bower components to jade
gulp.task('wiredep:jade', 'Inject Bower dependencies to Jade', function() {
  return gulp.src(config.wiredep.jade.src)
    .pipe(wiredep(config.wiredep.jade.cfg))
    .pipe(gulp.dest(config.wiredep.jade.dest));
});

// Inject bower components
gulp.task('wiredep', 'Inject Bower dependencies', ['wiredep:sass','wiredep:jade']);