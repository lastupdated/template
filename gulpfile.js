var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
	console.log("Lorem Ipsum");
});

gulp.task('html', function() {
	console.log("Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
});

gulp.task('watch', function() {

	watch('./index.html', function() {
		gulp.start('html');
	});

	watch('./index.html', function() {
		gulp.start("styles");
	});

});

