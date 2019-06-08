//Подключаем модули галпа
const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();

const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');
var pug = require('gulp-pug');


//Порядок подключения css файлов
const styleDesktop = './stylus/desktop/*.styl';
const styleMobile = './stylus/mobile/*.styl';
const pugFiles = [
    './pug/index.pug'
];

gulp.task('views', function buildHTML() {

});

function buildHTML(){
    return gulp.src(pugFiles)
        .pipe(pug({
        }))
        .pipe(gulp.dest('./'))
}

//Таск на стили CSS
function styles() {
    //Шаблон для поиска файлов CSS
    //Всей файлы по шаблону './src/css/**/*.css'
    return gulp.src(styleDesktop, styleMobile)

        .pipe(sourcemaps.init())
        .pipe(stylus())
        //Объединение файлов в один
        .pipe(concat('style.css'))
        //Добавить префиксы
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        //Минификация CSS
        // .pipe(cleanCSS({
        //     level: 2
        // }))
        .pipe(sourcemaps.write('./'))
        //Выходная папка для стилей
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

//Удалить всё в указанной папке
function clean() {
    return del(['build/*'])
}

//Просматривать файлы
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    //watch for PUG files
    gulp.watch('./pug/**/*.pug', buildHTML);
    //Следить за CSS файлами
    gulp.watch('./stylus/desktop/*.styl', styles);
    gulp.watch('./stylus/mobile/*.styl', styles);
    //При изменении HTML запустить синхронизацию
    gulp.watch("./*.html").on('change', browserSync.reload);
}

//Таск вызывающий функцию styles
gulp.task('styles', styles);

//Таск для очистки папки build
gulp.task('del', clean);
//Таск для отслеживания изменений
gulp.task('watch', watch);
//Таск для удаления файлов в папке build и запуск styles и scripts
gulp.task('build', gulp.series(clean, styles));
//Таск запускает таск build и watch последовательно
gulp.task('dev', gulp.series('build','watch'));