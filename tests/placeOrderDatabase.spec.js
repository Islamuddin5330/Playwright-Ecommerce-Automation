
import { test, expect } from "@playwright/test";

const { savePlacedOrder } = require("../Utils/orderRepository");

test("Add Product to the Cart and Save Order in MySQL", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        const shirtName = [
            "White T-Shirt",
            "Blue Pant",
            "White Sports Shoes",
            "Black Sandal"
        ];

        const items = [];

        // 1. Open website and log in
        await page.goto("https://shop.qaautomationlabs.com/");

        await page.locator("#email").fill("demo@demo.com");
        await page.locator("#password").fill("demo");
        await page.locator("#loginBtn").click();

        await expect(page.locator("#qaNav")).toContainText("Home");
        console.log("Login successful");

        // 2. Open men's shop
        await page.getByRole("link", {
            name: "Shop Men Fashion"
        }).click();

        const products = page.locator("div.product-item");
        await products.first().waitFor();

        const productCount = await products.count();
        console.log("Total products:", productCount);

        // 3. Add matching products and record them
        for (let i = 0; i < productCount; i++) {
            const product = products.nth(i);

            const productName = (
                await product.getByRole("link").first().textContent()
            )?.trim();

            console.log("Checking product:", productName);

            if (productName && shirtName.includes(productName)) {
                await product.locator("button.addToCart").click();

                items.push({productName,quantity: 1});

                console.log("Product added:", productName);
            }
        }

        expect(items.length).toBeGreaterThan(0);
        console.log("Products selected:", items);

        // 4. Open cart
        await page.locator("#cartdesk").click();

        // 5. Proceed to checkout
        await page.locator("#checkoutBtn").click();

        // 6. Fill billing details
        await page.locator("#firstname").fill("Mr Beam");
        await page.locator("#middlename").fill("Khan");
        await page.locator("#lastname").fill("Waheed");
        await page.locator("#email").fill("mryour@gmail.com");
        await page.locator("#phone").fill("9988112200");
        await page.locator("#address").fill("Beside your Home");
        await page.locator("#states").fill("Telangana");
        await page.locator("#city").fill("Warangal");
        await page.locator("#pincode").fill("300015");

        // 7. Read order total
        const totalText = await page
            .getByRole("heading", { name: /^\$[\d,]+(?:\.\d{1,2})?$/ })
            .last()
            .textContent();

        if (!totalText) {
            throw new Error("Could not read the order total.");
        }

        const totalAmount = Number(
            totalText.replace(/[$,]/g, "").trim()
        );

        console.log("Total amount:", totalAmount);

        // 8. Place order
        await page.getByTestId("continue-btn").click();
        await page.getByTestId("place-order-btn").click();

        await expect(
            page.getByRole("heading", {
                name: "🎉 Thank You for Your Order!"
            })
        ).toBeVisible();

        console.log("Order placed successfully on website");

        // 9. Generate a local database reference.
        // This is NOT the website's actual order ID.
        const orderNumber = `TEST-${Date.now()}`;

        // 10. Save order and items to MySQL
        await savePlacedOrder({
            totalAmount,
            items
        });

        console.log("Order saved in MySQL:", orderNumber);
        console.log("Saved items:", items.length);
        console.log("Saved order number:", String(orderNumber).padStart(3, "0")
        );
    } finally {
        await context.close();
    }
});
