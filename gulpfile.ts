import gulp from 'gulp';
import minify from 'gulp-minify';
import rename from 'gulp-rename';

gulp.task('default', async () => {
    return gulp.src('hello.ts')
        .pipe(minify())
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('build/'))
        .on('success', () => {
            return console.log("### Done");
        })
})

