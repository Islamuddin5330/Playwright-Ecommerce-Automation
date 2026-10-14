import { test, expect } from "@playwright/test";

const excelTest = require("../Utils/readExcel");
const updateExcelResult = require("../Utils/wrightExcel");

test("Search products from Excel", async ({ browser }) => {

    const excelData = await excelTest();
    console.log("Excel Data:", excelData);

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://shop.qaautomationlabs.com/?utm_source=chatgpt.com");

    // Login
    await page.locator("#email").fill(excelData[0].username);
    await page.locator("#password").fill(excelData[0].password);
    await page.locator("#loginBtn").click();

    await expect(page.locator("#qaNav")).toContainText("Home");

    console.log("Login successful");

    // Men's Wear
    await page.getByTestId("shop-now-mens-wear").click();

    // Get products from Excel
    const productNames = excelData.map(row => row.productName);

    console.log("Products from Excel:", productNames);

    for (const enterProductName of productNames) {

        console.log("Searching for:", enterProductName);

        await page
            .getByTestId("search-input")
            .fill(enterProductName);

        const foundProduct = page.locator("div.product-item");
        await foundProduct.first().waitFor({ state: "visible" });
        const productCounts = await foundProduct.count();

        console.log("Total products found:",productCounts);

        let productFound = false;

        for (let i = 0; i < productCounts; i++) {

            const getProductName =
                (await foundProduct
                    .nth(i)
                    .locator("a.h6")
                    .textContent())?.trim();

            console.log(
                "Found Product:",
                getProductName
            );

            if (getProductName?.includes(enterProductName)) {

                await foundProduct
                    .nth(i)
                    .locator("button.addToCart")
                    .click();

                console.log(
                    "Product added to Cart:",
                    getProductName
                );

                productFound = true;
                break;
            }
        }

        // Update Excel
        if (productFound) {
            await updateExcelResult(enterProductName, "Pass")
        } else {
            await updateExcelResult(enterProductName, "Fail")
        }

        expect(productFound).toBe(true);
    }

    // Cart
    await page.locator("#cartdesk").click();

    const selectedProduct =
        page.getByTestId("cart-table").locator("tbody tr");

    await expect(selectedProduct.first()).toBeVisible();

    const verifyProduct = await selectedProduct.count();

    console.log(
        "Total Selected Products:",
        verifyProduct
    );

    // Verify cart products
    for (let i = 0; i < verifyProduct; i++) {

        const finalProductName =
            (await selectedProduct
                .nth(i)
                .locator("td.align-left")
                .textContent())?.trim();

        console.log(
            "Cart Product:",
            finalProductName
        );

        expect(productNames).toContain(finalProductName);
    }

    // Checkout
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

    console.log("Total price of Order:", price);

    await page.getByTestId("continue-btn").click();
    await page.getByTestId("place-order-btn").click();

    await expect(page.locator("div h1"))
        .toHaveText("🎉 Thank You for Your Order!");
});