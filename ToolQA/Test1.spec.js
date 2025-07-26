// const { test, expect } = require("@playwright/test");
// const { request } = require("http");
// const ExcelJS = require('exceljs');

// test("Handle Alerts pop-upss", async ({ page }) => {
//     await page.goto("https://the-internet.herokuapp.com/")
//     await page.waitForTimeout(10000)
//     await page.keyboard.press('PageDown');
//     await page.locator("//a[text()='JavaScript Alerts']").click()

//     page.once('dialog', async dialog => {
//         await page.waitForTimeout(3000)
//         await dialog.accept();  // Accept alert
//     });
//     await page.locator("//button[text()='Click for JS Alert']").click();
//     await page.waitForTimeout(1000);

//     // -------- Handle JS Prompt --------
//     page.once('dialog', async dialog => {
//         await page.waitForTimeout(2000)
//         await dialog.accept("omkar wagh");
//     });
//     await page.locator("//button[text()='Click for JS Prompt']").click();
//     await page.waitForTimeout(1000);
//     await page.close()
// })

// test("Hover the mouse action", async ({ page }) => {
//     await page.goto("https://the-internet.herokuapp.com/")
//     await page.waitForTimeout(5000)
//     await page.locator("//a[text()='Hovers']").click();
//     await page.keyboard.press('PageDown');
//     await page.locator("(//div[@class='figure'])[3]").hover();
//     await page.waitForTimeout(3000);
//     // ⏳ Pause to see the hover effect

//     // Optional: Validate if "View profile" becomes visible
//     const isVisible = await page.locator("(//a[text()='View profile'])[3]").isVisible();

// })

// test("handle iframes", async ({ page }) => {
//     await page.goto("https://the-internet.herokuapp.com/");
//     page.on('request', request => console.log(request.url()))
//     page.on('response', Response => console.log(Response.status(), Response.url()))
//     await page.waitForTimeout(2000);

//     await page.locator("//a[text()='Frames']").click();
//     await page.locator("//a[text()='Nested Frames']").screenshot({ path: 'screenshot1.png' })
//     await page.locator("//a[text()='Nested Frames']").click()
//     try {
//         const middleFrame = page
//             .frameLocator("frame[name='frame-top']")
//             .frameLocator("frame[name='frame-middle']")

//         const middleText = await middleFrame.locator("#content").textContent();
//         console.log("Middle frame text:", middleText);
//     }
//     catch (TypeError) {
//         console.log(`Test Case got failed+${TypeError}`)
//     }

// })

// test("handle calender",async({page})=>{
    
//     await page.goto("https://rahulshettyacademy.com/angularpractice/")
//     // Pass your custom values here
//   const day = '09';
//   const month = '01'; // January (01 to 12)
//   const year = '2019';

//   const formattedDate = `${year}-${month}-${day}`;

//   await page.locator('input[name="bday"]').fill(formattedDate);
//     await page.pause()
    
// })

// test.only("ExcelSheet Handling", async ({ page }) => {

//   async function excelTest() { // reusable block
//     const workbook = new ExcelJS.Workbook();                 //it will create new workbook instance - entire excel files
//     await workbook.xlsx.readFile("C:\\Users\\omkar wagh\\OneDrive\\Desktop\\omkar.xlsx"); //this line of code will read the file which we given the path

//     const worksheet = workbook.getWorksheet('Sheet1');   //read the particular sheet inside file

//     worksheet.eachRow((row, rowNumber) => {              //read each row
//       row.eachCell((cell, colNumber) => {                //inside each roww each cell values
//         console.log(`Row ${rowNumber}, Column ${colNumber}: ${cell.value}`);    //each rows and each cell values
//       });
//     });
//   }

//   await excelTest();    //wait for until it finish its execution before going to next test

// });