import { test, expect, chromium } from "@playwright/test";

test("Add Product to the Carts", async ({browser}) => {
    // const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    const shirtName = ["White T-Shirt", "Blue Pant", "White Sports Shoes", "Black Sandal"];

    await page.goto("https://shop.qaautomationlabs.com/?utm_source=chatgpt.com");

    //Login to E-commerce
    await page.locator("#email").fill("demo@demo.com");
    await page.locator("#password").fill("demo");
    await page.locator("#loginBtn").click();

    await expect(page.locator("#qaNav")).toContainText("Home");
    console.log("Login successful");

    // Go to Shop
    await page.getByRole("link", { name: "Shop Men Fashion" }).click();

    await page.waitForLoadState("domcontentloaded");

    const products = page.locator("div.product-item");
    const countEachProduct = await products.count();

    console.log("Total products:", countEachProduct);

    for (let i = 0; i < countEachProduct; i++) {
        const product = products.nth(i);
        const productName = (await product.getByRole("link").first().textContent())?.trim(); //a.h6
        console.log("Checking product:", productName);
        if (shirtName.includes(productName)) {
            await product.locator("button.addToCart").click();
            console.log("Product added:", productName);
        }
    }

})