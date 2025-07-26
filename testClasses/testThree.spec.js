const { test, expect } = require('@playwright/test');
const CartItem = require('../pomClasses/cartItem');
const CartPage = require('../pomClasses/cartPage');
const LoginPage = require('../pomClasses/loginPage');
const LogoutPage = require('../pomClasses/logoutPage');
const CheckOut = require('../pomClasses/checkOut');
const Utility = require('./Utility');

let cartPage, cartItem, checkOutPage, utility;
let productOne, productOnePrice, productTwo, productTwoPrice;
let firstName, lastName, zipCode;
let username, password;

test.describe.parallel("End to End Test Cases Until Checkout item page", () => {

  test.beforeAll(async () => {
    // ✅ Instantiate utility class & load all test data
    utility = new Utility();

    username = await utility.UtilityTestData('Sheet1', 2, 1);
    password = await utility.UtilityTestData('Sheet1', 2, 2);

    productOne = await utility.UtilityTestData('Sheet1', 3, 1);
    productOnePrice = await utility.UtilityTestData('Sheet1', 3, 2);

    productTwo = await utility.UtilityTestData('Sheet1', 4, 1);
    productTwoPrice = await utility.UtilityTestData('Sheet1', 4, 2);

    firstName = await utility.UtilityTestData('Sheet1', 6, 1);
    lastName = await utility.UtilityTestData('Sheet1', 6, 2);
    zipCode = await utility.UtilityTestData('Sheet1', 6, 3).toString(); // Ensure string for fill()
  });

  test.beforeEach("Login into application", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto("https://www.saucedemo.com/");
    await loginPage.login(username, password);
  });

  test("Add item into cart and checkout the item", async ({ page }) => {
    cartPage = new CartPage(page);
    cartItem = new CartItem(page);
    checkOutPage = new CheckOut(page);

    await cartPage.addItemToCart(productOne, productOnePrice);
    await cartPage.addItemToCart(productTwo, productTwoPrice);

    await page.waitForTimeout(1000);
    await cartPage.handleDropDown(3);
    await cartPage.handleDropDown(1);
    await page.waitForLoadState('networkidle');

    await cartPage.checktheLabel();
    await cartPage.checkOutLabel.click();

    await cartItem.cartItemList();
    await cartItem.clickContinueShopping();

    await cartPage.checktheLabel();
    await cartPage.checkOutLabel.click();

    await cartItem.clickOnCheckOutButton();
    await checkOutPage.checkOutItems(firstName, lastName, zipCode);
    await checkOutPage.cancelButtonClick();

    await cartItem.clickOnCheckOutButton();
    await checkOutPage.checkOutItems(firstName, lastName, zipCode);
    await checkOutPage.continueButtonClick();
  });

  test("Error message should display after clicking continue", async ({ page }) => {
    cartPage = new CartPage(page);
    cartItem = new CartItem(page);
    checkOutPage = new CheckOut(page);

    await cartPage.addItemToCart(productOne, productOnePrice);
    await cartPage.addItemToCart(productTwo, productTwoPrice);

    await page.waitForTimeout(1000);
    await cartPage.handleDropDown(3);
    await cartPage.handleDropDown(1);
    await page.waitForLoadState('networkidle');
    await cartPage.checktheLabel();
    await cartPage.checkOutLabel.click();

    await cartItem.cartItemList();
    await cartItem.clickOnCheckOutButton();

    await checkOutPage.continueButtonClick();
    await page.waitForTimeout(2000);

    const error = await checkOutPage.getErrorMessage();
    await expect(error).toBe("Error: First Name is required");

    await checkOutPage.cancelClick();
    await checkOutPage.checkOutItems(firstName, lastName, zipCode);
    await checkOutPage.continueButtonClick();
  });

  test.afterEach("Log out from application", async ({ page }) => {
    const logOut = new LogoutPage(page);
    await logOut.logOut();
  });

  test.afterAll(() => {
    // ✅ Clean up all object references
    cartPage = null;
    cartItem = null;
    checkOutPage = null;
    utility = null;

    username = null;
    password = null;
    productOne = null;
    productTwo = null;
    productOnePrice = null;
    productTwoPrice = null;
    firstName = null;
    lastName = null;
    zipCode = null;
  });
});
