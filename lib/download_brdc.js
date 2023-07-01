const fs = require('fs')
const path = require('path')
const moment = require('moment')
const puppeteer = require('puppeteer')

module.exports = async (buildDirectory, username, password) => {
  const now = moment()
  const doy = now.dayOfYear()
  const year = now.year()
  const brdcRoot = `https://cddis.nasa.gov/archive/gnss/data/daily/${year}/brdc`
  const brdcFilename = `brdc${doy}0.23g.gz`
  const brdcDownloadURI = `${brdcRoot}/${brdcFilename}`
  const brdcOutputFile = `${buildDirectory}/${brdcFilename}`
  
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
  
  console.info(brdcDownloadURI, 'downloading...')
  const brdcBase64Data = await page.evaluate(async (brdcDownloadURI) => {
    const response = await fetch(brdcDownloadURI, { method: 'GET', credentials: 'include' })
    const responseBuffer = await response.arrayBuffer()
    return btoa(String.fromCharCode.apply(null, new Uint8Array(responseBuffer)))
  }, brdcDownloadURI)
  fs.writeFileSync(brdcOutputFile, Buffer.from(brdcBase64Data, 'base64'))
  
  const { execa } = await import('execa')
  console.info(brdcOutputFile, 'decompressing...')
  await execa('gzip', ['-f', '-d', brdcOutputFile])
    .pipeStdout(process.stdout)
    .pipeStderr(process.stderr)
  
  await browser.close()
}