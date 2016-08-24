var gulp = require("gulp");
var sass = require("gulp-sass");
var notify = require("gulp-notify");


gulp.task("css-compile", function(){
	return gulp.src("./source/sass/*.scss")
	.pipe(sass({outputStyle: 'compressed'}))
	.on('error', notify.onError({ title: 'Erro ao compilar', message: '<%= error.message %>'}))
	.pipe(gulp.dest("./dist/css"));
})

gulp.task("move-fonts", function(){
	return gulp.src('./source/components/components-font-awesome/fonts/**')
	.pipe(gulp.dest('./dist/fonts'));
})

gulp.task("build-js", function(){
	return gulp.src([
	'./source/components/jquery/dist/jquery.js',
	'./source/components/jquery-mobile/jquery.mobile.custom.js',
	'./source/components/bootstrap/dist/js/bootstrap.js'
	])
	.pipe(gulp.dest('./dist/js'));
});

gulp.task("move-js", function(){
	return gulp.src('./source/js/*.js')
	.pipe(gulp.dest('./dist/js'));
});

gulp.task("listen-files", function(){
	gulp.watch("./source/sass/*.scss",["css-compile"]);
	gulp.watch("./source/js/**/*.js",["move-js"]);
})

gulp.task("default", ["build-js","css-compile","move-js","listen-files"]);