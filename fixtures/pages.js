import {test as base} from '@playwright/test'
import { loginPage} from '../pages/LoginPage'
import { inventoryPage } from '../pages/InventoryPage'
import { cartPage } from '../pages/cartPage'
import { checkoutPage} from '../pages/CheckoutPage'

export const test = base.extend(
    {
    loginPage: async ({ page }, use) => 
        {
            const loginPage = new LoginPage(page)
            await use(loginPage);

        },
    
    inventoryPage: async ({page}, use) =>
        {
            const inventoryPage = new InventoryPage(page)
            await use(inventoryPage)
        },
    cartPage: async ({page}, use)  =>
        {
            const cartPage = new CartPage(page)
            await use(cartPage)
        },
    checkoutPage: async ({page}, use) =>
        {
            const checkoutPage = new CheckoutPage(page)
            await use(checkoutPage)
        }      
    })