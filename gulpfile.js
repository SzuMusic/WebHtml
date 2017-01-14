var gulp = require('gulp');
var uglify=require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var concat=require('gulp-concat');
var paths= {
    scripts:['css/button.min.css','css/form.min.css']
}
gulp.task('default', function() {
   gulp.src('mycss/*.css')
       .pipe(concat('login.min.css'))  
       .pipe(minifycss())
       .pipe(gulp.dest('build'));
  console.log('hello kobe!');
});