const path = require('path')

module.exports.BUILD_DIRECTORY = path.resolve(__dirname, '..', 'build')
module.exports.PAYLOADS_DIRECTORY = path.resolve(__dirname, '..', 'payloads')

module.exports.BIN_MATCHER = /\.bin$/
module.exports.BRDC_FILE_MATCHER = /\.\d\dn$/
module.exports.BRDC_GZIP_FILE_MATCHER = /\.\d\dn\.gz$/