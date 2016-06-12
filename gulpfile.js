var gulp = require('gulp'),
	rigger = require('gulp-rigger'), // шаблоны html
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	sourcemaps = require('gulp-sourcemaps'), // карта кодов
	rimraf = require('rimraf'), // удаление файлов и каталогов
	notify = require('gulp-notify'),
	uncss = require('gulp-uncss'), // проверка css на дубли и не задействованые стили
	concat = require('gulp-concat'), // объединение
	uglify = require('gulp-uglify'), // минификация js
	fontawesome = require('node-font-awesome'),

	path = {
		build: {
			html: 'build/',
			js: 'build/js/',
			css: 'build/css/',
			img: 'build/img/',
			image: 'build/image/',
			fonts: 'build/fonts/'
		},
		dev: {
			html: 'dev/*.html', // Синтаксис dev/*.html говорит gulp что мы хотим взять все файлы с расширением .html
			js: 'dev/js/main.js', // В стилях и скриптах нам понадобятся только main файлы
			style: 'dev/style/**/*.sass',
			img: 'dev/img/**/*.*', // Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
			image: 'dev/image/**/*.*',
			fonts: 'dev/fonts/**/*.*',
			bootstrap: {
				sass: 'node_modules/bootstrap-sass/assets/stylesheets/',
				js: 'node_modules/bootstrap-sass/assets/javascripts/',
				//fonts: 'node_modules/bootstrap-sass/assets/fonts/bootstrap/**/*.*'
			},
			fontawesome: {
				sass: fontawesome.scssPath,
				fonts: fontawesome.fonts
			},
			slick: {
				sass: 'node_modules/slick-carousel/slick/slick.scss',
				js: 'node_modules/slick-carousel/slick/slick.min.js',
				fonts: 'node_modules/slick-carousel/slick/fonts/**/*.*'
			},
		},
		watch: {
			html: 'dev/**/*.html',
			js: 'dev/js/**/*.js',
			style: 'dev/style/**/*.sass',
			img: 'dev/img/**/*.*',
			fonts: 'dev/fonts/**/*.*'
		},
		clean: './build'
	};

gulp.task('default', ['build', 'watch']);

gulp.task('build', [
	'html:build',
	'js:build',
	'style:build',
	'fonts:build',
	'image:build'
]);

gulp.task('html:build', function () {
	gulp.src(path.dev.html) //Выберем файлы по нужному пути
		.pipe(rigger()) //Прогоним через rigger
		.pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
		//.pipe(reload({stream: true})) //И перезагрузим наш сервер для обновлений
		//.pipe(notify('HTML succes'))
});

gulp.task('style:build', function () {
	gulp.src(path.dev.style) //Выберем sass
		.pipe(sourcemaps.init()) //Инициализируем sourcemap
		.pipe(sass({ //Скомпилируем
			outputStyle: 'compressed', //nested
			includePaths: [
				path.dev.bootstrap.sass,
				path.dev.fontawesome.sass,
				path.dev.slick.sass
			]
		}))
		/*.pipe(uncss({ // удаление не испульзуемых стилей
			html: [
				path.dev.html
			]
		}))*/
		.pipe(autoprefixer({ //Добавим вендорные префиксы
			browsers: ['> 0.1%'],
			cascade: false
		}))
		//.pipe(cssmin()) //Сожмем
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.css)) //И в build
		// .pipe(reload({stream: true}))
});

gulp.task('image:build', function () {
	gulp.src(path.dev.img) //Выберем наши картинки
		.pipe(imagemin({ //Сожмем их
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [
				pngquant({
					quality: '65-80', 
					speed: 4
				})
			],
			interlaced: true
		}))
		.pipe(gulp.dest(path.build.img)); //И бросим в build
		//.pipe(reload({stream: true})

	gulp.src(path.dev.image)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [
				pngquant({
					quality: '65-80', 
					speed: 4
				})
			],
			interlaced: true
		}))
		.pipe(gulp.dest(path.build.image))
});

gulp.task('fonts:build', function() { // дабы держать традицию
	gulp.src([
		path.dev.fonts, 
		path.dev.fontawesome.fonts,
		path.dev.slick.fonts
	])
		.pipe(gulp.dest(path.build.fonts))
});

gulp.task('js:build', function () {
	gulp.src([
			path.dev.js,
			path.dev.slick.js
		])
		.pipe(sourcemaps.init()) // Инициализируем карты
		.pipe(uglify()) // Сожмем js
		.pipe(sourcemaps.write()) // Пропишем карты
		.pipe(gulp.dest(path.build.js)) // готовый файл в build
		//.pipe(reload({stream: true})) // И перезагрузим сервер
});

gulp.task('watch', function () { // слежение за изменениями
	gulp.watch([path.watch.html], function(event, cb) {
		gulp.start('html:build');
	});
	gulp.watch([path.watch.style], function(event, cb) {
		gulp.start('style:build');
	});
	gulp.watch([path.watch.js], function(event, cb) {
		gulp.start('js:build');
	});
	gulp.watch([path.watch.img], function(event, cb) {
		gulp.start('image:build');
	});
	gulp.watch([path.watch.fonts], function(event, cb) {
		gulp.start('fonts:build');
	});
});

gulp.task('clean', function (cb) { // очистка билда
	rimraf(path.clean, cb);
});


// --save - вносит запись в package.json в dependencies
// --save-dev - вносит запись в package.json в devDependencies (не попадают в продакшн)
// * --save и --save-dev сделают запись, если package.json существует

/* npm install 
--save-dev gulp-rigger 
--save-dev gulp-sass 
--save-dev gulp-autoprefixer 
--save-dev gulp-imagemin 
--save-dev imagemin-pngquant 
--save-dev gulp-sourcemaps  
--save-dev rimraf 
--save-dev gulp-notify 
--save-dev gulp-uncss 
--save-dev gulp-concat 
--save bootstrap-sass 
--save font-awesome 
--save-dev node-font-awesome 
--save slick-carousel 
*/
