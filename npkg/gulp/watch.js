const gulp = require('gulp');
// v4.x

gulp.task('task1', function (cb) {
	console.log('task1 done');
	cb();
});

gulp.task('watch', function () {
	gulp.watch( ['sass/**/*.scss', 'layouts/**/*.css'], gulp.series('task1') );
	
	gulp.watch( 'a/**/*', {ignoreInitial: false}, gulp.series('task2') ); // Initial execution
	
	gulp.watch( 'path/to/file', gulp.series('gulp_task_name') );
	
	gulp.watch( 'path/to/file', gulp.series('task1', 'task2') );
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// v3.x
// deprecated in v4:
// Error: watching sass/**/*.scss: watch task has to be a function (optionally generated by using gulp.parallel or gulp.series)

gulp.task('task1', function (cb) {
	console.log('task1 done');
	cb();
});

gulp.task('watch', function () {
	gulp.watch(['sass/**/*.scss', 'layouts/**/*.css'], ['css']);
	
	gulp.watch('path/to/file', ['gulp_task_name_to_run_when_changes_occur']);
	
	gulp.watch('path/to/file', ['task1', 'task2']);
});
