class CartPage {

    constructor(page) {
        this.page = page;
        this.itemList = page.locator("//div[@class='inventory_item']");
        this.itemNames = page.locator("//div[@class='inventory_item_name ']");
        this.prices = page.locator("//div[@class='inventory_item_price']");
        this.addToCartButtons = page.locator("//button[text()='Add to cart']");
        this.checkOutLabel = page.locator("//span[@class='shopping_cart_badge']")
        this.count1 = 0;
        this.dropDown = page.locator('select.product_sort_container')
    }

    async addItemToCart(itemName, itemPrice) {
        await this.page.waitForTimeout(2000)
                const count = await this.itemList.count();
        for (let i = 0; i < count; i++) {
            const currentItemName = await this.itemNames.nth(i).textContent();
            const currentPrice = await this.prices.nth(i).textContent();

            if (currentItemName.includes(itemName) && currentPrice.includes(itemPrice)) {
                const button = this.addToCartButtons.nth(i);
                try {
                    await button.waitFor({ state: 'attached', timeout: 3000 });
                    await button.scrollIntoViewIfNeeded();
                    await button.click({ timeout: 3000 });
                } catch (error) {
                    console.error("Initial click failed, trying force click:", error.message);
                    try {
                        await button.click({ force: true, timeout: 3000 });
                    } catch (fallbackError) {
                        console.error("Force click also failed:", fallbackError.message);
                    }
                }
                this.count1++;
                break;
            }
        }
    }
    

    async checktheLabel() {
        const labelText = await this.checkOutLabel.textContent()
        if (labelText.includes(this.count1.toString())) {
            console.log(`Number of Items Count: ${labelText}`)
        }
    }

    async handleDropDown(option) {
        const selectCount = await this.dropDown.locator('option').all()
        const value = await selectCount[selectCount.length - option].getAttribute('value')
        await this.dropDown.selectOption(value);
    }
}

module.exports = CartPage;
