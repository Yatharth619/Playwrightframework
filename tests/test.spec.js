import {test} from '@playwright/test'

test("website check", async({page}) => {

    await page.goto("https://decentro.tech/")
    await page.locator("//span[normalize-space()='Company']").hover(); await page.waitForTimeout(3000)
    await page.getByText('Why Decentro', { exact: true }).first().click()




})