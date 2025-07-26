const { expect } = require("allure-playwright")

class CheckOut {
    constructor(page){
        this.page = page
        this.firstName = page.getByPlaceholder("First Name")
        this.lastName = page.getByPlaceholder("Last Name")
        this.zipCode = page.getByPlaceholder("Zip/Postal Code")
        this.cancelButton = page.getByRole('button',{name:'Cancel'})
        this.continueButton = page.getByRole('button',{name:'Continue'})
        this.badge = page.locator("//span[@class='shopping_cart_badge']")
        this.errorMessage = page.locator("//div[@class='error-message-container error']")
        this.cancelCross = page.locator("//button[@class='error-button']")
    }

    async checkOutItems(first,last,code){
        await this.firstName.fill(first)
        await this.lastName.fill(last)
        await this.zipCode.fill(code.toString())
    }

    async cancelButtonClick(){
        await this.cancelButton.click()
    }

    async continueButtonClick(){
        await this.continueButton.click()
    }

    async getErrorMessage(){
        const errorMessages = await this.errorMessage.textContent()
        return errorMessages
    }

    async cancelClick(){
     await this.cancelCross.click()
    }
}

module.exports = CheckOut