const { test } = require('@playwright/test')
const CartPage = require('../pomClasses/cartPage')
const LoginPage = require('../pomClasses/loginPage')
const LogoutPage = require('../pomClasses/logoutPage')
const CartitemPage = require('../pomClasses/cartItem')
const Utility = require('../Utility')
let cartitem;
let cartPage;
let productOne
let productOnePrice
let productTwo
let productTwoPrice;

test.describe.parallel("CheckOut Page Validation", () => {
    let utility = new Utility();
    test.beforeEach("Login into application", async ({ page }) => {
        const loginPage = new LoginPage(page);
        const username = await utility.UtilityTestData('Sheet1', 2, 1);
        const password = await utility.UtilityTestData('Sheet1', 2, 2);
        productOne = await utility.UtilityTestData('Sheet1', 3, 1)
        productOnePrice = await utility.UtilityTestData('Sheet1', 3, 2)
        productTwo = await utility.UtilityTestData('Sheet1', 4, 1)
        productTwoPrice = await utility.UtilityTestData('Sheet1', 4, 2)
        await page.goto('https://www.saucedemo.com/');
        await loginPage.login(username, password);
    });

    test("Click on continue shopping button", async ({ page }) => {
        cartPage = new CartPage(page);
        cartitem = new CartitemPage(page);
        await cartPage.addItemToCart(productOne, productOnePrice)
        await cartPage.addItemToCart(productTwo, productTwoPrice);
        await page.waitForLoadState('networkidle')
        await cartPage.checkOutLabel.click()
        await cartitem.cartItemList()
        await cartitem.clickOnCheckOutButton()
    })

    test.afterEach("LogOut from Application", async ({ page }) => {
        const logout = new LogoutPage(page);
        await logout.logOut();
    })
})