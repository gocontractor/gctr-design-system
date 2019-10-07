var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat')

/*
 * CSS gulp function
 * Select all css files of this lib
 * Convert files from sass to css and compress them
 * Set autoprefixer on styles
 * Concatenate files into one min.css
 * Save minified file into dist folder
 */
gulp.task('css', gulp.series((done) => {
    gulp.src([
        "src/lib/styles/imports/fonts.scss",
        "src/lib/styles/imports/gctr-font.scss",
        "src/lib/styles/imports/material-outlined.scss",
        "src/lib/styles/imports/animations.scss",
        "src/lib/styles/imports/colors.scss",
        "src/lib/styles/sass/*.scss",
        "src/lib/styles/base/*.scss",
        "src/lib/styles/components/*.scss",
        "src/lib/styles/help/*.scss",
        "src/lib/styles/theme/*.scss"
    ])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('../../dist/gctr-design-system/lib/styles/'));
    done();
}));

/*
 * COPY gulp function
 * Select all font files and icons of this lib
 * Save into dist folder
 */
gulp.task('copy', gulp.series((done) => {
    gulp.src([
        "src/lib/styles/imports/*.eot",
        "src/lib/styles/imports/*.svg",
        "src/lib/styles/imports/*.ttf",
        "src/lib/styles/imports/*.woff",
        "src/lib/styles/imports/*.ico",
        "src/lib/styles/imports/*.png",
        "src/lib/styles/imports/*.json",
        "src/lib/styles/imports/*.xml"
    ])
    .pipe(gulp.dest('../../dist/gctr-design-system/lib/styles/'));
    done();
}));

/*
 * Default task 
 * Run into npm run build script
 */
gulp.task('default', gulp.series('css', 'copy'));