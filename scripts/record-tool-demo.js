/**
 * Record a short screen tour of the SSPW calculator for the Loopwerk hero.
 * Requires: npx playwright install chromium
 *
 * Output: assets/hero/sspw-tool-tour.webm
 */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT_DIR = path.join(__dirname, '..', 'assets', 'hero');
const OUT_FILE = path.join(OUT_DIR, 'sspw-tool-tour.webm');
const URL = 'https://sspw-offerte-calc.vercel.app/';

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: { dir: OUT_DIR, size: { width: 1280, height: 720 } },
  });
  const page = await context.newPage();

  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1500);

  const fields = page.locator('input[type="number"], input[type="text"]').first();
  if (await fields.count()) {
    await page.mouse.move(200, 280);
    await page.waitForTimeout(400);
    await page.mouse.click(200, 280);
    await page.waitForTimeout(300);
    await page.keyboard.type('8');
    await page.waitForTimeout(600);
    await page.mouse.move(420, 280);
    await page.waitForTimeout(300);
    await page.mouse.click(420, 280);
    await page.keyboard.type('4');
    await page.waitForTimeout(600);
    await page.mouse.move(640, 280);
    await page.waitForTimeout(300);
    await page.mouse.click(640, 280);
    await page.keyboard.type('1.5');
    await page.waitForTimeout(800);
  }

  await page.mouse.wheel(0, 400);
  await page.waitForTimeout(1200);
  await page.mouse.move(640, 420);
  await page.waitForTimeout(400);
  await page.mouse.click(640, 420);
  await page.waitForTimeout(1500);

  await page.mouse.wheel(0, 500);
  await page.waitForTimeout(2000);

  const video = page.video();
  await context.close();
  await browser.close();

  if (video) {
    const tempPath = await video.path();
    if (fs.existsSync(tempPath)) {
      if (fs.existsSync(OUT_FILE)) fs.unlinkSync(OUT_FILE);
      fs.renameSync(tempPath, OUT_FILE);
      console.log('Saved:', OUT_FILE);
    }
  }
}

main().catch(function (err) {
  console.error(err);
  process.exit(1);
});
