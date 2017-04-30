var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync.init(["*.html", "assets/css/*.css", "assets/javascript/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('Sound Board/css/**/*.css', ['css']);
});