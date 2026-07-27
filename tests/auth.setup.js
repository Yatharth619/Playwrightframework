import { test } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { users } from '../data/logindata';

test('Authenticate', async ({ page }) => {

    const loginPage = new LoginPage(page)

    await loginPage.navigate();
    await loginPage.login(users.StandardUser.username, users.StandardUser.password)
    await page.context().storageState({path: ".auth/user.json"})

})