var gulp = require('gulp'),
	karma = require('gulp-karma');

gulp.task('test', function() {
	return gulp.src(['lib/*.js', 'test/**/*.js'])
		    .pipe(karma({
		      configFile: 'karma.conf.js',
		      action: 'run'
		    }))
		    .on('error', function(err) {
		      // Make sure failed tests cause gulp to exit non-zero 
		      throw err;
		    });
})

gulp.task('default', function() {
	return gulp.src(['lib/*.js', 'test/**/*.js'])
	    .pipe(karma({
	      configFile: 'karma.conf.js',
	      action: 'watch'
	    }));
});