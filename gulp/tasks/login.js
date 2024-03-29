import gulp from 'gulp';
import inquirer from 'inquirer';
import getConfigFile from '../util/getConfigFile';

gulp.task('login', function() {
    var config = getConfigFile();
    var loginPromise = new Promise((resolve, reject) => {
        //if already entered credentials
        if (config.user.login.length) {
            return resolve(config.user);
        }
        inquirer.prompt(config.loginQuestions).then(answer => {
            if (!(answer.login.length && answer.password.length)) {
                reject('loginError');
                process.exit();
            } else {
                resolve(answer)
                config.user = answer
            }
        });
    });
    return loginPromise;
})