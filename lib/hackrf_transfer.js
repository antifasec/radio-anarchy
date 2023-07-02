const countdownCount = 5

module.exports = async (gpsSimBinaryFile, frequency, sampleRate, txGain, amplify, nowait) => {
  const transmit = async () => {
    console.info('TRANSMITTING GPS SIGNAL')
    const { execa } = await import('execa')
    await execa('hackrf_transfer', [
      '-t', gpsSimBinaryFile,
      '-f', frequency,
      '-s', sampleRate,
      '-x', txGain,
      '-a', amplify
    ]).pipeStdout(process.stdout)
      .pipeStderr(process.stderr)
  }

  if (nowait) return await transmit()

  return await new Promise((resolve) => {
    console.info(`Waiting ${countdownCount} seconds before transmitting...`)
    let intervals = 0
    const countdown = setInterval(async () => {
      if (intervals++ < countdownCount) return console.warn('Transmitting in', (countdownCount - intervals), 'seconds...')
      clearInterval(countdown)
      await transmit()
      resolve()
    }, 1000)
  })
}