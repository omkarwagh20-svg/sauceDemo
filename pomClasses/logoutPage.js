class logoutPage {
    constructor(page) {
        this.page = page
        this.menu = page.locator("//button[text()='Open Menu']")
        this.logoutButton = page.locator("//a[text()='Logout']")
    }

    async logOut() {
        await this.menu.click()
        await this.logoutButton.click()
    }
}

module.exports = logoutPage