import {test, expect, chromium} from '@playwright/test'

const browser = await chromium.launch();
const context1 = await browser.newContext();
const page = await context1.newPage();

test('login', async()=>{

    await page.goto('https://playwright.dev/');

});