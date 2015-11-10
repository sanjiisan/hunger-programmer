var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

gulp.task('style', function () {
    gulp.src('web/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('web/css'))
        .pipe(concat('main.css'))
        .on('error', function (err) {
            gutil.log(err);
            this.emit('end');
        })
        .pipe(livereload());
});

//Watch task
gulp.task('watch-style', function () {
    livereload.listen();
    gulp.watch('web/sass/**/*.scss', ['style']);
});
