import {test, expect, Page } from '@playwright/test'

test.skip('Skip Test',async({page})=>{

    await page.goto('https://react-redux.realworld.io/')
    await page.locator('//a[normalize-space()="Sign in"]').click()
    await page.locator('//input[@placeholder="Email"]').fill('playwrightdemo@gmail.com')
    await page.locator('//input[@placeholder="Password"]').fill('playwrightdemo')
    await page.locator('//button[normalize-space()="Sign in"]').click();
    
})

