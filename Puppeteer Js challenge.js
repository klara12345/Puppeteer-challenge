const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1080});
    await page.setUserAgent('dexi-engineering');
    await page.goto('https://data-qa.dexi.io/js-challenge');
    await page.screenshot({ path: 'example.png' });
    const secretCode = await page.$eval(".secret-code", el => el.textContent);
    console.log(secretCode)
    await browser.close();
  })(); 