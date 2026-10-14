import { test, expect } from "@playwright/test";

test("Validate Login test", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();


    // await page.goto("https://shop.qaautomationlabs.com/?utm_source=chatgpt.com");

    await page.goto("https://shop.qaautomationlabs.com/", {
        waitUntil: "domcontentloaded",
        timeout: 60000
    });

    //Login to E-commerce
    await page.locator("#email").fill("demo@demo.com");
    await page.locator("#password").fill("demo");
    await page.locator("#loginBtn").click();

    // await expect(page.locator("#qaNav")).toContainText("Home");
    
     // Verify successful login
    await expect(page.locator("#qaNav")).toContainText("Home", {
        timeout: 15000
    });
    console.log("Login successful");

})