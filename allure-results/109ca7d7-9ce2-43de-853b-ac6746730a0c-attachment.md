# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pageObject\placeOrder.spec.js >> Add Product to the Carts
- Location: tests\pageObject\placeOrder.spec.js:6:5

# Error details

```
TypeError: LoginPage.goTo is not a function
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | const { loginPage } = require("../../pageObject_placeOrder/loginPage");
  4  | const { homePage } = require("../../pageObject_placeOrder/homePage");
  5  | 
  6  | test("Add Product to the Carts", async ({ browser }) => {
  7  |     const context = await browser.newContext();
  8  |     const page = await context.newPage();
  9  | 
  10 |     const shirtName = ["White T-Shirt", "Blue Pant", "White Sports Shoes", "Black Sandal"];
  11 | 
  12 |     const LoginPage = new loginPage(page);
> 13 |     await LoginPage.goTo();
     |                     ^ TypeError: LoginPage.goTo is not a function
  14 |     const HomePage = await LoginPage.getLogin("demo@demo.com", "demo");
  15 |     HomePage.getSelectMensWear("Home");
  16 | 
  17 |     // await expect(page.locator("#qaNav")).toContainText("Home");
  18 |     // console.log("Login successful");
  19 | 
  20 |     // // Go to Shop
  21 |     // await page.getByRole("link", { name: "Shop Men Fashion" }).click();
  22 | 
  23 |     // await page.waitForLoadState("domcontentloaded");
  24 | 
  25 |     const products = page.locator("div.product-item");
  26 |     const countEachProduct = await products.count();
  27 | 
  28 |     console.log("Total products:", countEachProduct);
  29 | 
  30 |     for (let i = 0; i < countEachProduct; i++) {
  31 |         const product = products.nth(i);
  32 |         const productName = (await product.getByRole("link").first().textContent())?.trim(); //a.h6
  33 |         console.log("Checking product:", productName);
  34 |         if (shirtName.includes(productName)) {
  35 |             await product.locator("button.addToCart").click();
  36 |             console.log("Product added:", productName);
  37 |         }
  38 |     }
  39 | 
  40 |     //click on cart button
  41 |     await page.locator("#cartdesk").click();
  42 | 
  43 |     //now verify selected product are added to cart
  44 |     const selectedProduct = page.locator("tbody tr");
  45 |     const verifyProduct = await selectedProduct.count();
  46 | 
  47 |     console.log("Selected Products are :", verifyProduct);
  48 | 
  49 |     for (let i = 0; i < verifyProduct; i++) {
  50 |         const finalProductName = (await selectedProduct.nth(i).locator("td.align-left").textContent())?.trim();
  51 |         console.log("Cart Products:", finalProductName)
  52 | 
  53 |         //Anotherway
  54 |         // console.log("Cart product:", finalProductName);
  55 |         // expect(shirtName).toContain(finalProductName);
  56 |         // console.log("Product matched:", finalProductName);
  57 | 
  58 |         if (shirtName.includes(finalProductName)) {
  59 |             console.log("Product matched: ", finalProductName)
  60 |         } else {
  61 |             console.log("Product not matched: ", finalProductName)
  62 |         }
  63 |     }
  64 | 
  65 |     await page.locator("#checkoutBtn").click();
  66 |     await page.locator("#firstname").fill("Mr Beam");
  67 |     await page.locator("#middlename").fill(" ");
  68 |     await page.locator("#lastname").fill("Khan");
  69 |     await page.locator("#email").fill("mryour@gmail.com");
  70 |     await page.locator("#phone").fill("9988112200");
  71 |     await page.locator("#address").fill("Beside your Home");
  72 |     await page.locator("#states").fill("Telanagan");
  73 |     await page.locator("#city").fill("Warangle");
  74 |     await page.locator("#pincode").fill("300015");
  75 | 
  76 |     const price = await page.locator("#totalPrice").textContent();
  77 |     console.log("Total price of Order is: ", price);
  78 | 
  79 |     await page.getByTestId("continue-btn").click();
  80 |     // await page.getByRole("button", {text : "Place Order"}).click();
  81 |     await page.getByTestId("place-order-btn").click();
  82 | 
  83 |     await expect(page.locator("div h1")).toHaveText("🎉 Thank You for Your Order!");
  84 | 
  85 | 
  86 | });
```