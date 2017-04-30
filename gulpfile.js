var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch(["*.html", "assets/js/*.js"]).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);