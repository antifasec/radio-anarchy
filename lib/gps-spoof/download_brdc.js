const fs = require('fs')
const path = require('path')
const moment = require('moment')
const puppeteer = require('puppeteer')

const { brdcGzipFileMatcher } = require('./constants')

module.exports = async (buildDirectory, username, password) => {
  const now = moment()
  const doy = now.dayOfYear()
  const year = now.year()
  const brdcRoot = `https://cddis.nasa.gov/archive/gnss/data/daily/${year}/brdc`
  
  console.info('Downloading brdc file...')
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()
  await page.goto(brdcRoot)
  
  console.info('Logging in...')
  await page.type('#username', username)
  await page.type('#password', password)
  await page.click('#login input[type="submit"]')

  console.info('Waiting for oauth...')
  await page.waitForRequest(brdcRoot)
  await page.goto(brdcRoot)

  console.log('Extracting brdc files...')
  const downloadURIs = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll('a.archiveItemText[href]'),
      a => a.getAttribute('href').trim()
    )
  })

  await Promise.all(downloadURIs.map(async href => {
    if (!brdcGzipFileMatcher.test(href)) return

    const doyString = (`000${doy}0`).slice(-4)
    const doyMatcher = new RegExp(`brdc${doyString}`)
    if (!doyMatcher.test(href)) return

    console.info(href, 'downloading...')
    const brdcOutputFile = `${buildDirectory}/${href}`
    const brdcBase64Data = await page.evaluate(async uri => {
      const response = await fetch(uri, { method: 'GET', credentials: 'include' })
      const responseBuffer = await response.arrayBuffer()
      return btoa(String.fromCharCode.apply(null, new Uint8Array(responseBuffer)))
    }, `${brdcRoot}/${href}`)
    fs.writeFileSync(brdcOutputFile, Buffer.from(brdcBase64Data, 'base64'))

    console.info(brdcOutputFile, 'decompressing...')
    const { execa } = await import('execa')
    await execa('gzip', ['-f', '-d', brdcOutputFile])
      .pipeStdout(process.stdout)
      .pipeStderr(process.stderr)
  }))
  
  await browser.close()
}