import { test} from "../fixtures/pages";
import { expect } from "@playwright/test";
import { users } from "../data/logindata";

test ("cart page check", async({loginPage, inventoryPage, cartPage}) => {

    await inventoryPage.navigate()
    await inventoryPage.addProductToCart("Sauce Labs Backpack")
    await inventoryPage.cartClick()
    await expect(cartPage.cartTitle).toHaveText("Your Cart")
    await expect(cartPage.cartItem("Sauce Labs Backpack")).toBeVisible();
}




)