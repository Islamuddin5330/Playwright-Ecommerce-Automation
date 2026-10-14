import { test, expect } from "@playwright/test";

const {savePlacedOrder} = require("../Utils/orderRepository")


test("Add Product to the Carts", async ({ browser }) => {
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

    //click on cart button
    await page.locator("#cartdesk").click();

    //now verify selected product are added to cart
    const selectedProduct = page.locator("tbody tr");
    const verifyProduct = await selectedProduct.count();

    console.log("Selected Products are :", verifyProduct);

    for (let i = 0; i < verifyProduct; i++) {
        const finalProductName = (await selectedProduct.nth(i).locator("td.align-left").textContent())?.trim();
        console.log("Cart Products:", finalProductName)

        //Anotherway
        // console.log("Cart product:", finalProductName);
        // expect(shirtName).toContain(finalProductName);
        // console.log("Product matched:", finalProductName);

        if (shirtName.includes(finalProductName)) {
            console.log("Product matched: ", finalProductName)
        } else {
            console.log("Product not matched: ", finalProductName)
        }
    }

    await page.locator("#checkoutBtn").click();
    await page.locator("#firstname").fill("Mr Beam");
    await page.locator("#middlename").fill(" ");
    await page.locator("#lastname").fill("Khan");
    await page.locator("#email").fill("mryour@gmail.com");
    await page.locator("#phone").fill("9988112200");
    await page.locator("#address").fill("Beside your Home");
    await page.locator("#states").fill("Telanagan");
    await page.locator("#city").fill("Warangle");
    await page.locator("#pincode").fill("300015");

    const price = await page.locator("#totalPrice").textContent();
    console.log("Total price of Order is: ", price);

    await page.getByTestId("continue-btn").click();
    // await page.getByRole("button", {text : "Place Order"}).click();
    await page.getByTestId("place-order-btn").click();

    await expect(page.locator("div h1")).toHaveText("🎉 Thank You for Your Order!");


});