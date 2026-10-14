import { test, expect } from "@playwright/test";

const data = JSON.parse(JSON.stringify(require("../Utils/getProductData.json")));
const singleProductData = data[0];
const multipleProductData = data[1];

test("Search only one product from qbSearch", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // const enterProductNames = ["Green Shirt", "Black T-Shirt"];

    await page.goto("https://shop.qaautomationlabs.com/?utm_source=chatgpt.com");

    //Login
    await page.locator("#email").fill(singleProductData.userName);
    await page.locator("#password").fill(singleProductData.password);
    await page.locator("#loginBtn").click();

    await expect(page.locator("#qaNav")).toContainText("Home");
    console.log("Login successful");

    //Select MenWears
    await page.getByTestId("shop-now-mens-wear").click();
    await page.waitForEvent("domcontentloaded");

    console.log("Searching for : ", singleProductData.productName)
    //Search for the Product
    await page.getByTestId("search-input").fill(singleProductData.productName);


    //get all the product
    const foundProduct = page.locator("div.product-item");
    const productCounts = await foundProduct.count();

    console.log("Total no of product found are : ", productCounts);

    let productFound = false;

    for (let i = 0; i < productCounts; i++) {
        const getProductName = (await foundProduct.nth(i).locator("a.h6").textContent())?.trim();

        console.log("Found Product: ", getProductName);

        if (getProductName.includes(singleProductData.productName)) {
            await foundProduct.locator("button.addToCart").click();
            console.log("Product added to the Cart is : ", getProductName);

            productFound = true;
            break;
        }
    }
    expect(productFound).toBe(true);

    //click on cart button
    await page.locator("#cartdesk").click();

    //now verify selected product are added to cart
    // const selectedProduct = page.locator("tbody tr");
    const selectedProduct = page.getByTestId("cart-table").locator("tbody tr");
    await expect(selectedProduct.first()).toBeVisible();
    const verifyProduct = await selectedProduct.count();

    console.log("Total Selected Products are :", verifyProduct);

    for (let i = 0; i < verifyProduct; i++) {
        const finalProductName = (await selectedProduct.nth(i).locator("td.align-left").textContent())?.trim();
        console.log("Cart Products:", finalProductName)

        if (singleProductData.productName.includes(finalProductName)) {
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
    if (verifyProduct > 1) {
        console.log("Total price of Order are: ", price);
    } else {
        console.log("Total price of Order is: ", price);
    }

    await page.getByTestId("continue-btn").click();
    // await page.getByRole("button", {text : "Place Order"}).click();
    await page.getByTestId("place-order-btn").click();

    await expect(page.locator("div h1")).toHaveText("🎉 Thank You for Your Order!");


})


test("Search more then one product from qbSearch", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // const enterProductNames = ["Green Shirt", "Black T-Shirt"];

    await page.goto("https://shop.qaautomationlabs.com/?utm_source=chatgpt.com");

    //Login
    await page.locator("#email").fill(multipleProductData.userName);
    await page.locator("#password").fill(multipleProductData.password);
    await page.locator("#loginBtn").click();

    await expect(page.locator("#qaNav")).toContainText("Home");
    console.log("Login successful");

    //Select MenWears
    await page.getByTestId("shop-now-mens-wear").click();
    await page.waitForEvent("domcontentloaded");

    for (const enterProductName of multipleProductData.productName) {

        console.log("Searching for : ", enterProductName)
        //Search for the Product
        await page.getByTestId("search-input").fill(enterProductName);


        //get all the product
        const foundProduct = page.locator("div.product-item");
        const productCounts = await foundProduct.count();

        console.log("Total no of product found are : ", productCounts);

        let productFound = false;

        for (let i = 0; i < productCounts; i++) {
            const getProductName = (await foundProduct.nth(i).locator("a.h6").textContent())?.trim();

            console.log("Found Product: ", getProductName);

            if (getProductName.includes(enterProductName)) {
                await foundProduct.locator("button.addToCart").click();
                console.log("Product added to the Cart is : ", getProductName);

                productFound = true;
                break;
            }
        }
        expect(productFound).toBe(true);
    }


    //click on cart button
    await page.locator("#cartdesk").click();

    //now verify selected product are added to cart
    const selectedProduct = page.getByTestId("cart-table").locator("tbody tr");
    await expect(selectedProduct.first()).toBeVisible();
    const verifyProduct = await selectedProduct.count();

    console.log("Total Selected Products are :", verifyProduct);

    for (let i = 0; i < verifyProduct; i++) {
        const finalProductName = (await selectedProduct.nth(i).locator("td.align-left").textContent())?.trim();
        console.log("Cart Products:", finalProductName)

        if (multipleProductData.productName.includes(finalProductName)) {
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
    if (verifyProduct > 1) {
        console.log("Total price of Order are: ", price);
    } else {
        console.log("Total price of Order is: ", price);
    }

    await page.getByTestId("continue-btn").click();
    // await page.getByRole("button", {text : "Place Order"}).click();
    await page.getByTestId("place-order-btn").click();

    await expect(page.locator("div h1")).toHaveText("🎉 Thank You for Your Order!");

});