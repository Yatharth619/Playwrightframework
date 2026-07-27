export class CheckoutOverviewPage{
 constructor (page){
    this.page=page 
    this.overviewTitle = page.locator(".title");

    this.paymentInfo = page.getByTestId("payment-info-label");
    this.shippingInfo = page.getByTestId("shipping-info-label");

    this.itemTotal = page.getByTestId("subtotal-label");
    this.tax = page.getByTestId("tax-label");
    this.total = page.getByTestId("total-label");

    this.finishButton = page.getByTestId("finish");
    this.cancelButton = page.getByTestId("cancel");

 }
   async finishOrder() {
        await this.finishButton.click()
   }
}