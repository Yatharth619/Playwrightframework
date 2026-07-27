export class CartPage {

constructor(page) {
    this.page = page

    this.cartTitle = page.locator(".title")
    this.cartItems = page.locator(".inventory_item_name");
    this.checkoutButton = page.locator("#checkout")
    this.continueShoppingButton = page.locator("#continue-shopping")
}
 cartItem(product) {
        return this.cartItems.filter({hasText: product})
}
  async checkout(){
await this.checkoutButton.click()
}
}