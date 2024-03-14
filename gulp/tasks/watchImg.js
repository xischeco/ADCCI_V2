import gulp from 'gulp';
import watch from 'gulp-watch';
import fileActionResolver from '../util/fileActionResolver';
import getConfigFile from '../util/getConfigFile';
import login from './login';

gulp.task('watch-img', () => {
    var config = getConfigFile();
    var conf = config.img;
    setTimeout(function() {
        console.log('Watching Image files started...'.green);
    }, 0);
    return watch(conf.path, function(file) {
        fileActionResolver(file);
    })
});

gulp.task('img-watch', 
    function() {
        global.isWatching = true;
        gulp.run('watch-img')
    })