// const { test, expect } = require('@playwright/test');

// test.describe.parallel("Sauce Demo Tests - Parallel Execution", () => {

//   test.beforeEach("launch the browser", async ({ page }) => {
//     await page.goto('https://www.saucedemo.com');
//     await page.getByPlaceholder('Username').fill('standard_user');
//     await page.getByPlaceholder('Password').fill('secret_sauce');
//     await page.getByRole('button', { name: 'Login' }).click();
//   });

//   test('launch the browser and add item to cart', async ({ page }) => {
//     await page.waitForLoadState('networkidle');

//     const items = page.locator('.inventory_item');
//     const count = await items.count();

//     console.log(`Total products: ${count}`);

//     for (let i = 0; i < count; i++) {
//       const name = await items.nth(i).locator('.inventory_item_name').textContent();
//       const price = await items.nth(i).locator('.inventory_item_price').textContent();

//       console.log(`Item: ${name.trim()} | Price: ${price.trim()}`);

//       if (name.includes('Sauce Labs Backpack') && price.includes('$29.99')) {
//         await items.nth(i).locator('button:has-text("Add to cart")').click();
//         console.log(`✅ Added: ${name.trim()}`);
//         break;
//       }
//     }

//     const cartCount = await page.locator('.shopping_cart_badge').textContent();
//     console.log(`🛒 Cart count: ${cartCount}`);
//   });

//   test("see the item added in cart", async ({ page }) => {
//     await page.locator('.inventory_item')
//       .filter({
//         has: page.locator('.inventory_item_name', { hasText: 'Sauce Labs Backpack' })
//       })
//       .locator('button:has-text("Add to cart")')
//       .click();

//     await page.locator('.shopping_cart_container a').click();
//     await page.waitForLoadState('networkidle');

//     const items_list = page.locator("//div[@class='cart_item']");
//     const counts = await items_list.count();
//     console.log(`Cart Items Count: ${counts}`);

//     let found = false;
//     for (let j = 0; j < counts; j++) {
//       const cart_item = await items_list.nth(j).locator('.inventory_item_name').textContent();
//       if (cart_item?.includes('Sauce Labs Backpack')) {
//         console.log(`✅ Item found in cart: ${cart_item.trim()}`);
//         found = true;
//         break;
//       }
//     }

//     await expect(found).toBeTruthy();
//   });

//   test("select drop down options", async ({ page }) => {
//     await page.locator('select.product_sort_container').selectOption({ label: 'Price (low to high)' });
//     console.log("✅ Dropdown sorted by Price (low to high)");
//   });

//   test("find broken links in app", async ({ page }) => {
//     const hrefs = page.locator('a');
//     const linkCount = await hrefs.count();

//     for (let i = 0; i < linkCount; i++) {
//       const link = await hrefs.nth(i).getAttribute('href');
//       if (link === null) {
//         console.log(`❌ Broken link found at index ${i}`);
//       } else {
//         console.log(`✅ Link ${i}: ${link}`);
//       }
//     }
//   });

//   test.afterEach("logout", async ({ page }) => {
//     await page.locator('button#react-burger-menu-btn').click();
//     await page.locator('a#logout_sidebar_link').click();
//   });

// });
