const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')

console.info(fs.readFileSync(path.resolve(__dirname, 'banner.txt'), 'utf8'), '\n')
console.info(pkg.name, pkg.version)
console.info('\n>', pkg.description, '\n')

require('./console-colors')