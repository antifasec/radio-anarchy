const path = require('path')

module.exports = async (gpsSdrSimBin, brdcFile, lat, lon, alt, runtime) => {
  console.info('Compiling gpssim.bin...')
  const { execa } = await import('execa')
  await execa(gpsSdrSimBin, [
    '-b', '8',
    '-e', brdcFile,
    '-l', `${lat},${lon},${alt}`,
    '-d', runtime,
    '-o', path.resolve(path.dirname(brdcFile), `${brdcFile}.${Date.now()}.bin`)
  ]).pipeStdout(process.stdout)
    .pipeStderr(process.stderr)
}