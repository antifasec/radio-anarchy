const path = require('path')
const axios = require('axios')
const decompress = require('decompress')
const { rimraf } = require('rimraf')

module.exports = async (gpsSdrSimBinaryFile) => {
  console.info('Downloading gps-sdr-sim...')
  const { data: gpsSdrSimZipData } = await axios.request({
    url: 'https://github.com/antifasec/gps-sdr-sim/archive/refs/heads/master.zip',
    responseType: 'arraybuffer'
  })
  
  console.info('Extracting gps-sdr-sim...')
  const repoPath = path.dirname(gpsSdrSimBinaryFile)
  const parentPath = path.dirname(repoPath)
  await rimraf(parentPath)
  await decompress(gpsSdrSimZipData, parentPath)

  console.info('Compiling gps-sdr-bin...')
  const { execa } = await import('execa')
  await execa('gcc', ['gpssim.c', '-lm', '-O3', '-o', 'gps-sdr-sim'], { cwd: repoPath })
    .pipeStdout(process.stdout)
    .pipeStderr(process.stderr)
}