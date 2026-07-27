const { test, expect } = require("@playwright/test");

const testData = require("../data/testdata.json");

test.describe("Data Test", () => {

    for (const data of testData) {

        test(`User Creation - ${data.username}`, async ({ page }) => {

            await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            await page.getByPlaceholder("Username").fill("Admin");

            await page.locator("//input[@placeholder='Password']").fill("admin123");

            await page.getByRole("button", { name: "Login" }).click();

            await expect(page).toHaveURL(/dashboard/);

            await page.locator("//span[normalize-space()='PIM']").click();

            await page.waitForLoadState("networkidle")

            await expect(page).toHaveURL(/viewEmployeeList/);

            await page.getByRole("button", { name: "Add" }).click();

            await page.getByPlaceholder("First Name").fill(data.fname);

            await page.getByPlaceholder("Last Name").fill(data.lname);

            await page.locator(".oxd-switch-input").click();

            await page.locator("(//input[@type='password'])[1]").fill(data.pass);

            await page.locator("(//input[@type='password'])[2]").fill(data.conpass);

            await page.locator("(//input[@class='oxd-input oxd-input--active'])[3]").fill(data.username);

            if(await page.getByText("Employee Id already exists").isVisible())
            {
                console.log("Employee ID already exists!");
                await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").clear()
                await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill ((Math.floor(Math.random() * 100000) + 1).toString()); 
                await page.waitForTimeout(4000)
            }
        
            await page.getByRole("button", { name: "Save" }).click();

            await page.waitForLoadState("networkidle")

            console.log(await page.url());
            await page.waitForTimeout(5000);

            await expect(page).toHaveURL(/viewPersonalDetails/); await page.waitForTimeout(4000);

            await page.getByRole("button", { name: "Save" }).first.click(); await page.waitForTimeout(4000);

            await page.getByRole("button", { name: "Save" }).last.click()

        });

    }

});