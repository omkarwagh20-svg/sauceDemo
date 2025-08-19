const { test, expect } = require('@playwright/test');
const LoginPage = require('../pomClasses/loginPage');
const CartPage = require('../pomClasses/cartPage');
const LogoutPage = require('../pomClasses/logoutPage');
let cartPage;

test.describe.parallel("Run the test cases parallely", () => {
  test.beforeEach("LoginPage", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');

  });

  test("Add item in cart based name and price", async ({ page }) => {
    cartPage = new CartPage(page);
    await cartPage.addItemToCart('Sauce Labs Backpack', '29.99');
  });

  test("Check the item count on badge cart", async ({ page }) => {
    cartPage = new CartPage(page);
    await cartPage.addItemToCart('Sauce Labs Backpack', '29.99');
    await cartPage.checktheLabel()
  })

  test("Add two items into cart", async ({ page }) => {
    cartPage = new CartPage(page);
    await cartPage.addItemToCart('Sauce Labs Backpack', '29.99');
    await cartPage.addItemToCart('Sauce Labs Bolt T-Shirt', '15.99');
    await cartPage.checktheLabel()
  })

  test("handle Drop down and select all option length wise", async ({ page }) => {
    cartPage = new CartPage(page);
    cartPage.handleDropDown(1);
    await page.waitForTimeout(2000)
    cartPage.handleDropDown(2);
    await page.waitForTimeout(2000)
    cartPage.handleDropDown(3);
    await page.waitForTimeout(2000)
    cartPage.handleDropDown(4);
  })

  test.afterEach("Logout from application", async ({ page }) => {
    const logoutPage = new LogoutPage(page);
    await logoutPage.logOut(); // 🛠️ Function must be called with ()
  });
})