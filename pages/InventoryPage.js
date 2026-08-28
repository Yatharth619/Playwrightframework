export class InventoryPage
{
    constructor (page)
    {
        this.page=page
        this.inventoryTitle=page.locator(".title")
        this.shoppingCart =page.locator("//a[@class='shopping_cart_link']")
        this.inventoryItems =page.locator("//*[@class='inventory_item_name ']")
        this.bagToCart=page.locator("(//*[@class = 'btn btn_primary btn_small btn_inventory '])[1]")
        this.cartIcon=page.locator(".shopping_cart_link")
    }
      async addProductToCart(product) {
      const productId = product.toLowerCase().replaceAll(' ', '-');
      await this.page.locator('#add-to-cart-' + productId).click();
    }
        checkRemoveButton(product){
        const productId=product.toLowerCase().replaceAll(' ','-')
        return this.page.locator("#remove-" + productId)
    }
        async cartClick(){
        await this.cartIcon.click()
    }
        async navigate() {
        await this.page.goto("/inventory.html")
    }
}



