var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var babel = require('gulp-babel');

var root = './app';
var dist = './build';
var ignore = [root + '/Directives/NgCombobox.js'];


var config = {
    js: {
        path: root + '/**/*.js',
        ignore: ignore
    },
    html: {
        path: root + '/**/*.html'
    },
    css: {
        path: root + '/**/*.css'
    }
}

gulp.task('js', function(type) {

    return gulp.src([config.js.path].join('!' + config.js.path.ignore))
        // .pipe(concat('all.js'))
        .pipe(babel())
        .pipe(uglify({
            mangle: true,
            compress: true
        }))
        .on('error', function(err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(gulp.dest(dist));
});

// Gulp task to copy HTML files to output directory
gulp.task('jsIgnore', function() {
    return gulp.src(ignore)
        .pipe(gulp.dest(dist + '/Directives/'));
});

// Gulp task to copy HTML files to output directory
gulp.task('html', function() {
    return gulp.src(config.html.path)
        .pipe(gulp.dest(dist));
});

// Gulp task to copy HTML files to output directory
gulp.task('css', function() {
    return gulp.src(config.css.path)
        .pipe(gulp.dest(dist));
});



// Gulp default task
gulp.task('default', gulp.parallel('js', 'jsIgnore', 'html', 'css'));