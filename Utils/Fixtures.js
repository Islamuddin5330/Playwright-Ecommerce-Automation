const { test, expect } = require("@playwright/test");

const custometest = test.extend({

    loginPage: async ({ browser }, use) => {

        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto("https://shop.qaautomationlabs.com/?utm_source=chatgpt.com");

        // Login
        await page.locator("#email").fill("demo@demo.com");
        await page.locator("#password").fill("demo");
        await page.locator("#loginBtn").click();

        await expect(page.locator("#qaNav")).toContainText("Home");

        console.log("Login successful");

        await use(page);

        await context.close();
    }
});

module.exports = {custometest};