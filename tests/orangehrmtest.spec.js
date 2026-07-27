const {test, expect}=require("@playwright/test")

test("user creation",async ({page}) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.getByPlaceholder("Username").fill("Admin")
await page.locator("//input[@placeholder='Password']").fill("admin123")
await page.getByRole("button", {name : "Login"}).click()
await expect(page).toHaveURL(/dashboard/)
await page.locator("//li[1]//a[1]//span[1]").click()
await page.waitForLoadState("networkidle")
await expect(page).toHaveURL(/admin/)
await page.getByRole("button", {name : "Add"}).click()
await page.locator(".oxd-icon.bi-caret-down-fill.oxd-select-text--arrow").first().click()
await page.getByRole('option', { name: 'ESS' }).click(); await page.waitForTimeout(2000)
await page.getByPlaceholder("Type for hints...").fill("Test user"); await page.waitForTimeout(1000)
await page.locator("(//input[@type='password'])[1]").fill("yatharth27"); await page.waitForTimeout(1000)
await page.locator("(//input[@type='password'])[2]").fill("yatharth27"); await page.waitForTimeout(1000)
await page.locator(".oxd-icon.bi-caret-down-fill.oxd-select-text--arrow").last().click()
await page.getByRole('option', { name: 'Enabled'}).click(); await page.waitForTimeout(2000)
await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("usernametest")
await page.getByRole("button", {name: "submit"}).click()

})