import { expect } from "@playwright/test"
import { test } from "../fixtures/pages"
import { users } from "../data/logindata"

test("Inventory page check", async({loginPage, inventoryPage }) =>
    {
   
    await inventoryPage.navigate()
    expect(await inventoryPage.inventoryItems).toHaveCount(6)
    await inventoryPage.addProductToCart("Sauce Labs Backpack")
    await expect(inventoryPage.checkRemoveButton("Sauce Labs Backpack")).toBeVisible()
    await inventoryPage.cartClick()

    }




)