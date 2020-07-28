var gulp = require('gulp'),
    aglio = require('gulp-aglio')
//     // browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    rimraf = require('rimraf'),
    ejs = require('gulp-ejs');

// // var reload = browserSync.reload;

const TEMPLATE_FILES = ['docs/**/*.md'],
    LAYOUT_FILE = 'docs/layout.md',
    PUBLISHED_DIR = 'published';

function combine() {
  return gulp.src(LAYOUT_FILE)
    .pipe(ejs({},{ ext: '.md' }))
    .pipe(rename('index.md'))
    .pipe(gulp.dest(PUBLISHED_DIR));
}

function generate() {
  return gulp.src(PUBLISHED_DIR + '/index.md')
    .pipe(aglio({template: 'default'}))
    .pipe(gulp.dest(PUBLISHED_DIR));
}

gulp.task('generate-api-docs', gulp.series(combine, generate));

gulp.task('watch', function () {
  gulp.watch(TEMPLATE_FILES, gulp.task('generate-api-docs'));
});

// gulp.task('publish', ['generate-api-docs']);
// gulp.task('default', ['generate-api-docs', 'watch']);


// var aglio = require('gulp-aglio');
// gulp.task('docs', function () {
//   gulp.src(['docs/*.md', 'docs/endpoints/*.md', 'docs/models/*.md'])
//     .pipe(aglio({ template: 'default' }))
//     .pipe(gulp.dest('published'));
// });