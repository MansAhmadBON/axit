const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const uglifycss = require('gulp-uglifycss');

// const jsFiles = [
//     './assets/js/index.js'
// ]

function style(){
    return gulp.src('./assets/scss/**/*.scss')
               .pipe(sourcemaps.init())
               .pipe(sass())
               .pipe(autoprefixer({
                    overrideBrowserslist: ['last 2 versions'],
                    cascade: false
                }))
               .pipe(uglifycss())
               .pipe(sourcemaps.write())
               .pipe(gulp.dest('./build/css'))
               .pipe(browserSync.stream())
}


function scripts(){
    return gulp.src('./assets/js/*.js')
               .pipe(gulp.dest('./build/js'))
               .pipe(browserSync.stream());
}


function watch(){
    browserSync.init({
        server: {
            baseDir: './build'
        }
    })
    gulp.watch('./assets/scss/**/*.scss', style)
    gulp.watch('./assets/js/*.js', scripts)
    gulp.watch('./build/*.html').on('change', browserSync.reload)
    
}

exports.scripts = scripts;
exports.style = style;
exports.start = watch;