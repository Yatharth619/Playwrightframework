export class CheckoutPage {
    
    constructor (page){
        
        this.page = page

        this.firstName=page.locator("#first-name")
        this.lastName=page.locator("#last-name")
        this.postalCode=page.locator("#postal-code")
        this.continueButton=page.locator("#continue")
        this.cancelButton=page.locator("#cancel")
    }

    async enterCheckoutInfo(firstName, lastName, postalCode){

        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.postalCode.fill(postalCode)
        await this.continueButton.click()
    }
    async









}