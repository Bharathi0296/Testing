import {test, expect} from '@playwright/test'

test('ecommerce test', async({page})=>{

    await page.goto('https://www.automationexercise.com/');
    await page.getByRole('link', {name : ' Signup / Login'}).click();
    await page.getByPlaceholder('Email Address').fill('test1@gmail.com');
    await page.getByPlaceholder('Password').fill('Testing');
    await page.frameLocator().getByRole('button', {name : 'Login'}).click();
    // await page.getByRole('textbox', {name : 'Password'}).fill('Testing');
    // await page.getByRole('button', {name : 'Sign In'}).click();
    // await expect(page.getByRole('link', {name : 'Log Out'})).toBeVisible();
    



});