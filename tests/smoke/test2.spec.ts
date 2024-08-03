import {test, expect, Page } from '@playwright/test'

test('Failed Login test',async({page})=>{

    await page.goto('https://react-redux.realworld.io/')
    await page.locator('//a[normalize-space()="Sign in"]').click()
    await page.locator('//input[@placeholder="Email"]').fill('playwrightdemo@gmail.com')
    await page.locator('//input[@placeholder="fuygjgkPassword"]').fill('playwrightdemo')
    await page.locator('//button[normalize-space()="Sign in"]').click();
    
})