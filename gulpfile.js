/**
 * Created by godfrey.f on 24/09/16.
 */
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    less = require('gulp-less');


// define the default task and add the watch task to it
//gulp.task('default', ['watch'], function() {
//    return gutil.log('Gulp Watch is running!')
//});


//Compile LESS to CSS
gulp.task('build-css', function () {
    return gulp.src('app/styles/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('app/styles/css'));
});

//Configure which files to watch and what task to use on file change
gulp.task('watch', function(){
    gulp.watch('app/styles/less/*.less', ['build-css']);
});
