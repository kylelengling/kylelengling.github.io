// Requirements 

var gulp = require('gulp'); 
var sass = require('gulp-sass');

// Compile Sass Task

gulp.task('sass', function() {
    return gulp.src('../assets/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('../css'));
});

// Watch Changes Task

gulp.task('watch', function() {
    gulp.watch('../assets/sass/**/*.scss', ['sass']);
});

// Default Task

gulp.task('default', ['sass', 'watch']);