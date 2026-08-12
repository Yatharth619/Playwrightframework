import { test} from "../fixtures/pages";
import { expect } from "@playwright/test";
import { users } from "../data/logindata";

test ("checkout page", async({inventoryPage, cartPage, checkoutPage}) => {
    
    await inventoryPage.navigate()
    await inventoryPage.addProductToCart("Saucessss Labs Bike Light")
    await inventoryPage.cartClick()
    await cartPage.checkout()
    await checkoutPage.enterCheckoutInfo(users.checkoutInfo.firstname, users.checkoutInfo.lastname, users.checkoutInfo.postalcode)
    


})