# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pageObject\placeOrderByPageObject.spec.js >> Add Product to the Carts
- Location: tests\pageObject\placeOrderByPageObject.spec.js:9:5

# Error details

```
TypeError: Address.getplaceOrder is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=f5e1]:
  - banner [ref=f5e2]:
    - generic [ref=f5e3]:
      - link [ref=f5e4] [cursor=pointer]:
        - /url: shop.php
        - img "QA Automation Labs" [ref=f5e5]
      - button "Toggle navigation" [ref=f5e6] [cursor=pointer]: ☰
      - generic [ref=f5e7]:
        - generic [ref=f5e8]:
          - link "Cart" [ref=f5e9] [cursor=pointer]:
            - /url: cart.php
            - generic [ref=f5e10]: 
            - generic [ref=f5e11]: "5"
          - button "Logout" [ref=f5e12] [cursor=pointer]:
            - generic [ref=f5e13]: 
        - search [ref=f5e14]:
          - searchbox "Search" [ref=f5e15]
  - generic [ref=f5e17]:
    - navigation [ref=f5e19]:
      - link "Home" [ref=f5e20] [cursor=pointer]:
        - /url: https://shop.qaautomationlabs.com/
      - generic [ref=f5e21]: / Confirm Details
    - link " Go To Back" [ref=f5e23] [cursor=pointer]:
      - /url: checkout.php
      - generic [ref=f5e24]: 
      - text: Go To Back
  - generic [ref=f5e27]:
    - generic [ref=f5e28]:
      - heading "Confirm Details" [level=5] [ref=f5e29]
      - generic [ref=f5e32]:
        - strong [ref=f5e34]: "First Name:"
        - generic [ref=f5e35]: Mr Beam
        - strong [ref=f5e37]: "Middle Name:"
        - strong [ref=f5e40]: "Last Name:"
        - generic [ref=f5e41]: Khan
        - strong [ref=f5e43]: "Email:"
        - generic [ref=f5e44]: mryour@gmail.com
        - strong [ref=f5e46]: "Phone:"
        - generic [ref=f5e47]: "9988112200"
        - strong [ref=f5e49]: "Address:"
        - generic [ref=f5e50]: Beside your Home
        - strong [ref=f5e52]: "State:"
        - generic [ref=f5e53]: Telanagan
        - strong [ref=f5e55]: "City:"
        - generic [ref=f5e56]: Warangle
        - strong [ref=f5e58]: "Pin Code:"
        - generic [ref=f5e59]: "300015"
    - generic [ref=f5e60]:
      - heading "Order Total" [level=5] [ref=f5e61]
      - generic [ref=f5e63]:
        - generic [ref=f5e64]:
          - heading "Payment" [level=4] [ref=f5e66]
          - generic [ref=f5e67]:
            - heading "Total" [level=5] [ref=f5e68]
            - heading "$2021" [level=5] [ref=f5e69]
        - link "Place Order" [ref=f5e71] [cursor=pointer]:
          - /url: thanks.php
      - generic [ref=f5e73]:
        - generic [ref=f5e74]:
          - heading "Cart" [level=4] [ref=f5e75]
          - heading "" [level=4] [ref=f5e76]
        - table [ref=f5e78]:
          - row [ref=f5e79]:
            - cell "White T-Shirt" [ref=f5e80]
            - cell "$500" [ref=f5e81]
            - cell "1" [ref=f5e82]
            - cell "$500" [ref=f5e83]
          - row [ref=f5e84]:
            - cell "Blue Pant" [ref=f5e85]
            - cell "$240" [ref=f5e86]
            - cell "1" [ref=f5e87]
            - cell "$240" [ref=f5e88]
          - row [ref=f5e89]:
            - cell "White Sports Shoes" [ref=f5e90]
            - cell "$450" [ref=f5e91]
            - cell "1" [ref=f5e92]
            - cell "$450" [ref=f5e93]
          - row [ref=f5e94]:
            - cell "White Sports Shoes" [ref=f5e95]
            - cell "$475" [ref=f5e96]
            - cell "1" [ref=f5e97]
            - cell "$475" [ref=f5e98]
          - row [ref=f5e99]:
            - cell "Black Sandal" [ref=f5e100]
            - cell "$356" [ref=f5e101]
            - cell "1" [ref=f5e102]
            - cell "$356" [ref=f5e103]
  - paragraph [ref=f5e107]:
    - text: © 2026
    - link "QA Automation Labs" [ref=f5e108] [cursor=pointer]:
      - /url: "#"
    - text: . All Rights Reserved.
  - text: 
  - generic [ref=f5e109]:
    - button "Inspect locators" [ref=f5e110] [cursor=pointer]:
      - generic [ref=f5e111]: 
    - button "Toggle dark mode" [ref=f5e112] [cursor=pointer]:
      - generic [ref=f5e113]: 
    - button "Toggle challenge mode" [ref=f5e114] [cursor=pointer]:
      - generic [ref=f5e115]: 
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | const { loginPage } = require("../../pageObject_placeOrder/loginPage");
  4  | const { homePage } = require("../../pageObject_placeOrder/homePage");
  5  | const { addToCart } = require("../../pageObject_placeOrder/addToCart");
  6  | const { productSummary } = require("../../pageObject_placeOrder/productSummary");
  7  | const { addressPage } = require("../../pageObject_placeOrder/addressPage");
  8  | 
  9  | test("Add Product to the Carts", async ({ browser }) => {
  10 |     const context = await browser.newContext();
  11 |     const page = await context.newPage();
  12 | 
  13 |     const shirtName = ["White T-Shirt", "Blue Pant", "White Sports Shoes", "Black Sandal"];
  14 | 
  15 |     const LoginPage = new loginPage(page);
  16 |     await LoginPage.goTo();
  17 |     const HomePage = await LoginPage.getLogin("demo@demo.com", "demo");
  18 |     const AddToCart = await HomePage.getSelectMensWear("Home");
  19 | 
  20 |     await AddToCart.getSelectProduct(shirtName);
  21 |     const proSummary = await AddToCart.goToCart();
  22 |     await proSummary.getCheckSelectedProduct(shirtName);
  23 |     const Address = await proSummary.getProceedBtn();
  24 |     await Address.fillAllAddressDetails("Mr Beam"," ","Khan","mryour@gmail.com","9988112200","Beside your Home","Telanagan","Warangle","300015");
  25 |     await Address.continueBtn();
> 26 |     await Address.getplaceOrder();
     |                   ^ TypeError: Address.getplaceOrder is not a function
  27 | 
  28 | 
  29 | 
  30 |     // await page.locator("#firstname").fill("Mr Beam");
  31 |     // await page.locator("#middlename").fill(" ");
  32 |     // await page.locator("#lastname").fill("Khan");
  33 |     // await page.locator("#email").fill("mryour@gmail.com");
  34 |     // await page.locator("#phone").fill("9988112200");
  35 |     // await page.locator("#address").fill("Beside your Home");
  36 |     // await page.locator("#states").fill("Telanagan");
  37 |     // await page.locator("#city").fill("Warangle");
  38 |     // await page.locator("#pincode").fill("300015");
  39 | 
  40 |     // const price = await page.locator("#totalPrice").textContent();
  41 |     // console.log("Total price of Order is: ", price);
  42 | 
  43 |     // await page.getByTestId("continue-btn").click();
  44 |     // // await page.getByRole("button", {text : "Place Order"}).click();
  45 |     // await page.getByTestId("place-order-btn").click();
  46 | 
  47 |     await expect(page.locator("div h1")).toHaveText("🎉 Thank You for Your Order!");
  48 | 
  49 | 
  50 | });
```