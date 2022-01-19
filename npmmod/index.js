// const chalk = require("chalk");
import chalk from 'chalk';

console.log(chalk.blue.underline.inverse('Hello world!'));

const log=console.log;
log(chalk.bold('How are you???'));

const error = chalk.bold.red;
log(error('Error...!!!'));
console.log('');

import validator from 'validator';
const res= validator.isEmail('youganjans@gmail.com');
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res));

const date= validator.isDate('2002-02-22');
console.log(date ? chalk.green.inverse(date):chalk.red.inverse(date));
