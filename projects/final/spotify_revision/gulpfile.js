'use strict';

// all plugins
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const browserSync = require('browser-sync').create();

const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const terser = require('gulp-terser');
const babel = require('gulp-babel');


// Expose the sass to css task
function sassworkflow() {
    return gulp
    .src('./src/styles/**/*.scss')

    // tasks go here
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream());
};
// lint JS code
function lint() {
    return gulp
    .src('src/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
    };
exports.lint = lint;

// Concatenate JS
function scripts() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        './src/scripts/*.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(babel({
        // transpile ES6 to ES5 and minify
        presets: ['@babel/preset-env']
    }))
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/js'))
    .pipe(terser())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());
    };
exports.scripts = scripts;

function watchtask(){
    browserSync.init({
    server: {
    baseDir: "./",
    index: "/index.html"
    }
    });
    gulp.watch( './src/styles/**/*.scss', sassworkflow );
    gulp.watch( './src/scripts/*.js', gulp.parallel( scripts, lint) );
}

// Expose the task by exporting it
exports.watchtask = watchtask;

// Expose the task by exporting it
// This allows you to run it from the command line using
// $ gulp sassworkflow
exports.sassworkflow = sassworkflow;

// build the parallal task
const build = gulp.parallel(sassworkflow, scripts);

// what runs when typing gulp
gulp.task('default', gulp.series(build, watchtask));