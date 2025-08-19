const { expect } = require('@playwright/test');

class CartitemPage {
    constructor(page) {
        this.page = page
        this.quantity = page.locator("//div[@class='cart_quantity']")
        this.itemName = page.locator("//div[@class='inventory_item_name']")
        this.itemPrice = page.locator("//div[@class='inventory_item_price']")
        this.itemBadge = page.locator("//span[@class='shopping_cart_badge']")
        this.checkoutButton = page.locator("[class*='btn btn_action btn']")
        this.continueShopping = page.locator("[data-test*='continue-shopping']")
    }

    async cartItemList() {
        const itemCount = await this.quantity.count();
        await expect(this.itemBadge).toHaveText(itemCount.toString());
    }

    async clickOnCheckOutButton() {
        await this.checkoutButton.click()
    }

    async clickContinueShopping() {
        await this.continueShopping.click()
    }
}

module.exports = CartitemPage