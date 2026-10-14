# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pageObject\placeOrderByPageObject.spec.js >> Add Product to the Carts
- Location: tests\pageObject\placeOrderByPageObject.spec.js:6:5

# Error details

```
TypeError: page.waitForEvent(...).first is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - banner [ref=f1e2]:
    - generic [ref=f1e3]:
      - link [ref=f1e4] [cursor=pointer]:
        - /url: shop.php
        - img "QA Automation Labs" [ref=f1e5]
      - button "Toggle navigation" [ref=f1e6] [cursor=pointer]: ☰
      - generic [ref=f1e7]:
        - generic [ref=f1e8]:
          - link "Cart" [ref=f1e9] [cursor=pointer]:
            - /url: cart.php
            - generic [ref=f1e10]: 
            - generic [ref=f1e11]: "0"
          - button "Logout" [ref=f1e12] [cursor=pointer]:
            - generic [ref=f1e13]: 
        - search [ref=f1e14]:
          - searchbox "Search" [ref=f1e15]
  - navigation [ref=f1e19]:
    - link "Home" [ref=f1e20] [cursor=pointer]:
      - /url: "#"
    - link "/ Shop" [ref=f1e21] [cursor=pointer]:
      - /url: shop.php
  - generic [ref=f1e23]:
    - generic [ref=f1e25]:
      - img "Men Fashion" [ref=f1e26]
      - generic [ref=f1e27]:
        - heading "Save 20%" [level=6] [ref=f1e28]
        - heading "Men Fashion" [level=3] [ref=f1e29]
        - link "Shop Men Fashion" [ref=f1e30] [cursor=pointer]:
          - /url: mens-wear.php
          - text: Shop Now
    - generic [ref=f1e32]:
      - img "Women Fashion" [ref=f1e33]
      - generic [ref=f1e34]:
        - heading "Save 45%" [level=6] [ref=f1e35]
        - heading "Women Fashion" [level=3] [ref=f1e36]
        - link "Shop Women Fashion" [ref=f1e37] [cursor=pointer]:
          - /url: womens-wear.php
          - text: Shop Now
    - generic [ref=f1e39]:
      - img "Kids Fashion" [ref=f1e40]
      - generic [ref=f1e41]:
        - heading "Save 60%" [level=6] [ref=f1e42]
        - heading "Kids Fashion" [level=3] [ref=f1e43]
        - link "Shop Kids Fashion" [ref=f1e44] [cursor=pointer]:
          - /url: kids-wear.php
          - text: Shop Now
    - generic [ref=f1e46]:
      - img "Electronics" [ref=f1e47]
      - generic [ref=f1e48]:
        - heading "Save 45%" [level=6] [ref=f1e49]
        - heading "Electronics" [level=3] [ref=f1e50]
        - link "Shop Electronics" [ref=f1e51] [cursor=pointer]:
          - /url: electronics.php
          - text: Shop Now
  - paragraph [ref=f1e55]:
    - text: © 2026
    - link "QA Automation Labs" [ref=f1e56] [cursor=pointer]:
      - /url: "#"
    - text: . All Rights Reserved.
  - text: 
  - generic [ref=f1e57]:
    - button "Inspect locators" [ref=f1e58] [cursor=pointer]:
      - generic [ref=f1e59]: 
    - button "Toggle dark mode" [ref=f1e60] [cursor=pointer]:
      - generic [ref=f1e61]: 
    - button "Toggle challenge mode" [ref=f1e62] [cursor=pointer]:
      - generic [ref=f1e63]: 
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
  13 |     await LoginPage.goTo();
  14 |     const HomePage = await LoginPage.getLogin("demo@demo.com", "demo");
  15 |     HomePage.getSelectMensWear("Home");
  16 | 
  17 | 
  18 |     const products = page.locator("div.product-item");
  19 |     const countEachProduct = await products.count();
> 20 |     await page.waitForEvent("domcontentloaded").first();
     |                                                 ^ TypeError: page.waitForEvent(...).first is not a function
  21 | 
  22 |     console.log("Total products:", countEachProduct);
  23 | 
  24 |     for (let i = 0; i < countEachProduct; i++) {
  25 |         const product = products.nth(i);
  26 |         const productName = (await product.getByRole("link").first().textContent())?.trim(); //a.h6
  27 |         console.log("Checking product:", productName);
  28 |         if (shirtName.includes(productName)) {
  29 |             await product.locator("button.addToCart").click();
  30 |             console.log("Product added:", productName);
  31 |         }
  32 |     }
  33 | 
  34 |     //click on cart button
  35 |     await page.locator("#cartdesk").click();
  36 | 
  37 |     //now verify selected product are added to cart
  38 |     const selectedProduct = page.locator("tbody tr");
  39 |     const verifyProduct = await selectedProduct.count();
  40 | 
  41 |     console.log("Selected Products are :", verifyProduct);
  42 | 
  43 |     for (let i = 0; i < verifyProduct; i++) {
  44 |         const finalProductName = (await selectedProduct.nth(i).locator("td.align-left").textContent())?.trim();
  45 |         console.log("Cart Products:", finalProductName)
  46 | 
  47 |         //Anotherway
  48 |         // console.log("Cart product:", finalProductName);
  49 |         // expect(shirtName).toContain(finalProductName);
  50 |         // console.log("Product matched:", finalProductName);
  51 | 
  52 |         if (shirtName.includes(finalProductName)) {
  53 |             console.log("Product matched: ", finalProductName)
  54 |         } else {
  55 |             console.log("Product not matched: ", finalProductName)
  56 |         }
  57 |     }
  58 | 
  59 |     await page.locator("#checkoutBtn").click();
  60 |     await page.locator("#firstname").fill("Mr Beam");
  61 |     await page.locator("#middlename").fill(" ");
  62 |     await page.locator("#lastname").fill("Khan");
  63 |     await page.locator("#email").fill("mryour@gmail.com");
  64 |     await page.locator("#phone").fill("9988112200");
  65 |     await page.locator("#address").fill("Beside your Home");
  66 |     await page.locator("#states").fill("Telanagan");
  67 |     await page.locator("#city").fill("Warangle");
  68 |     await page.locator("#pincode").fill("300015");
  69 | 
  70 |     const price = await page.locator("#totalPrice").textContent();
  71 |     console.log("Total price of Order is: ", price);
  72 | 
  73 |     await page.getByTestId("continue-btn").click();
  74 |     // await page.getByRole("button", {text : "Place Order"}).click();
  75 |     await page.getByTestId("place-order-btn").click();
  76 | 
  77 |     await expect(page.locator("div h1")).toHaveText("🎉 Thank You for Your Order!");
  78 | 
  79 | 
  80 | });
```