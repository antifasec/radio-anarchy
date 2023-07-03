const fs = require('fs')
const path = require('path')

module.exports = fileOrPath => {
  const fileOrPathIsFile = (() => {
    try { return fs.lstatSync(path.resolve(fileOrPath)).isFile() }
    catch (e) { return false }
  })()

  return (() => {
    if (fileOrPathIsFile) return [ path.resolve(fileOrPath) ]
    try {
      return fs.readdirSync(fileOrPath, { withFileTypes: true })
        .filter(f => f.isFile())
        .map(f => path.resolve(fileOrPath, f.name))
    } catch (e) { return [] }
  })()
}