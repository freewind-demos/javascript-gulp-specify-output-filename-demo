import gulp from 'gulp';
import rename from 'gulp-rename';

gulp.task('default', async () => {
    return gulp.src('src/hello.js')
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('build/'))
        .on('success', () => {
            return console.log("### Done");
        })
})

