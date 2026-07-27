import {expect} from '@playwright/test'
import { test } from '../fixtures/pages'
import {users} from '../data/logindata'

test("Valid Login",async ({loginPage, inventoryPage}) => {

    await loginPage.navigate()
    await loginPage.login(users.StandardUser.username, users.StandardUser.password)
    await expect(inventoryPage.inventoryTitle).toHaveText('Products');



})
test("Valid Login lockeduser",async ({loginPage}) => {

    await loginPage.navigate()
    await loginPage.login(users.LockedUser.username, users.LockedUser.password)
    await expect(loginPage.errormessage).toContainText("Sorry, this user has been locked out.")



})
test("Invalid login", async ({loginPage}) => {

    await loginPage.navigate()
    await loginPage.login(users.StandardUser.username, "rrrrrr")
    await expect(loginPage.errormessage).toContainText("Username and password do not match any user in this service")

})