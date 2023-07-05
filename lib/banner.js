const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')

const { program } = require('commander')

program.option('--nobanner', 'Omit the banner', false)

;(() => {
  program.parse()
  if (program.opts().nobanner) return
  console.info(fs.readFileSync(path.resolve(__dirname, 'banner.txt'), 'utf8'), '\n')
  console.info(pkg.name, pkg.version)
  console.info('\n>', pkg.description, '\n')
})()

require('./consoleColors')