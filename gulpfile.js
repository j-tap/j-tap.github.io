var gulp = require('gulp'),
	rigger = require('gulp-rigger'), // шаблоны html
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'), // карта кодов
	uncss = require('gulp-uncss'), // проверка css на дубли и не задействованые стили
	concat = require('gulp-concat'), // объединение js
	concatCss = require('gulp-concat-css'), // объединение css
	uglify = require('gulp-uglify'), // минификация js
	strip = require('gulp-strip-comments'), // удаление комментов
	fontawesome = require('node-font-awesome'),
	image = require('gulp-image'),

	path = {
		build: {
			html: '.',
			js: 'js/',
			css: 'css/',
			img: 'img/',
			image: 'image/',
			fonts: 'fonts/'
		},
		dev: {
			html: 'dev/*.html', // Синтаксис dev/*.html говорит gulp что мы хотим взять все файлы с расширением .html
			js: 'dev/js/main.js', // В стилях и скриптах нам понадобятся только main файлы
			style: 'dev/style/**/*.sass',
			img: [
				'dev/img/**/*.png',
				'dev/img/**/*.jpg',
			],
			image: [
				'dev/image/**/*.jpg',
				'dev/image/**/*.png'
			],
			fonts: 'dev/fonts/**/*.*',  // Синтаксис /**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
			bootstrap: {
				sass: 'node_modules/bootstrap-sass/assets/stylesheets/',
				js: 'node_modules/bootstrap-sass/assets/javascripts/',
				//fonts: 'node_modules/bootstrap-sass/assets/fonts/bootstrap/**/*.*'
			},
			fontawesome: {
				sass: fontawesome.scssPath,
				fonts: fontawesome.fonts
			}
		},
		watch: {
			html: 'dev/**/*.html',
			js: 'dev/js/**/*.js',
			style: 'dev/style/**/*.sass',
			img: 'dev/img/**/*.*',
			image: 'dev/image/**/*.*',
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
		.pipe(strip()) // удаление комментов
		.pipe(gulp.dest(path.build.html)) //Выплюнем их в build
		//.pipe(reload({stream: true})) //И перезагрузим наш сервер для обновлений
		//.pipe(notify('HTML succes'))
});

gulp.task('style:build', function () {
	gulp.src(path.dev.style) //Выберем sass
		//.pipe(sourcemaps.init()) //Инициализируем sourcemap
		.pipe(sass({ //Скомпилируем
			outputStyle: 'compressed', //nested
			includePaths: [
				path.dev.bootstrap.sass,
				path.dev.fontawesome.sass,
			]
		}))
		/*.pipe(uncss({ // удаление не испульзуемых стилей
			html: [
				path.dev.html
			]
		}))*/
		.pipe(autoprefixer({ //Добавим вендорные префиксы
			//browsers: ['last 3 versions'],
			cascade: false
		}))
		//.pipe(cssmin()) //Сожмем
		//.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.css)) //И в build
		// .pipe(reload({stream: true}))
});

gulp.task('image:build', function () {
	gulp.src(path.dev.img) //Выберем наши картинки
		.pipe(image())
		.pipe(gulp.dest(path.build.img)); //И бросим в build
		//.pipe(reload({stream: true})

	gulp.src(path.dev.image)
		.pipe(image())
		.pipe(gulp.dest(path.build.image))
});

gulp.task('fonts:build', function() { // дабы держать традицию
	gulp.src([
		path.dev.fonts, 
		path.dev.fontawesome.fonts
	])
	.pipe(gulp.dest(path.build.fonts))
});

gulp.task('js:build', function () {
	gulp.src([
			path.dev.js
		])
		//.pipe(sourcemaps.init()) // Инициализируем карты
		.pipe(uglify()) // Сожмем js
		//.pipe(sourcemaps.write()) // Пропишем карты
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

