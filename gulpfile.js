var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var util = require('gulp-util');

gulp.task('bundle', function(){
	var conf = {
		entries: ['src/app/main.js']
	};
	
	return browserify(conf)
		.transform(babelify)
		.bundle()
		.on('error', function(err) {
            util.log(util.colors.red('Error'), err.message);
            this.emit('end');
        })
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['bundle'], function(){
	gulp.watch(['src/app/**/*.js'], ['bundle']);
});