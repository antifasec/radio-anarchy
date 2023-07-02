const chalk = require('chalk')
const { log, info, warn, error } = console
console.log = (...args) => log(chalk.bold.green('[log]', ...args))
console.info = (...args) => info(chalk.bold.blue('[info]', ...args))
console.warn = (...args) => warn(chalk.bold.yellow('[warn]', ...args))
console.error = (...args) => error(chalk.bold.red('[error]', ...args))