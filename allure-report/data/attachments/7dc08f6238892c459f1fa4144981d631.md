# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: placeOrderDatabase.spec.js >> Add Product to the Carts
- Location: tests\placeOrderDatabase.spec.js:6:5

# Error details

```
Error: Order ID not found. Check the confirmation text.
```

# Page snapshot

```yaml
- generic [active] [ref=f6e1]:
  - banner [ref=f6e2]:
    - generic [ref=f6e3]:
      - link [ref=f6e4] [cursor=pointer]:
        - /url: shop.php
        - img "QA Automation Labs" [ref=f6e5]
      - button "Toggle navigation" [ref=f6e6] [cursor=pointer]: ☰
      - generic [ref=f6e7]:
        - generic [ref=f6e8]:
          - link "Cart" [ref=f6e9] [cursor=pointer]:
            - /url: cart.php
            - generic [ref=f6e10]: 
            - generic [ref=f6e11]: "0"
          - button "Logout" [ref=f6e12] [cursor=pointer]:
            - generic [ref=f6e13]: 
        - search [ref=f6e14]:
          - searchbox "Search" [ref=f6e15]
  - navigation [ref=f6e19]:
    - link "Home" [ref=f6e20] [cursor=pointer]:
      - /url: "#"
    - generic [ref=f6e21]: / Thanks
  - generic [ref=f6e25]:
    - heading "Thanks" [level=5] [ref=f6e26]
    - generic [ref=f6e27]:
      - heading "🎉 Thank You for Your Order!" [level=1] [ref=f6e28]
      - paragraph [ref=f6e29]: Your order has been placed successfully.
      - link "Shop Again" [ref=f6e30] [cursor=pointer]:
        - /url: shop.php
  - paragraph [ref=f6e34]:
    - text: © 2026
    - link "QA Automation Labs" [ref=f6e35] [cursor=pointer]:
      - /url: "#"
    - text: . All Rights Reserved.
  - text: 
  - generic [ref=f6e36]:
    - button "Inspect locators" [ref=f6e37] [cursor=pointer]:
      - generic [ref=f6e38]: 
    - button "Toggle dark mode" [ref=f6e39] [cursor=pointer]:
      - generic [ref=f6e40]: 
    - button "Toggle challenge mode" [ref=f6e41] [cursor=pointer]:
      - generic [ref=f6e42]: 
```

# Test source

```ts
  12  |     await page.goto("https://shop.qaautomationlabs.com/?utm_source=chatgpt.com");
  13  | 
  14  |     //Login to E-commerce
  15  |     await page.locator("#email").fill("demo@demo.com");
  16  |     await page.locator("#password").fill("demo");
  17  |     await page.locator("#loginBtn").click();
  18  | 
  19  |     await expect(page.locator("#qaNav")).toContainText("Home");
  20  |     console.log("Login successful");
  21  | 
  22  |     // Go to Shop
  23  |     await page.getByRole("link", { name: "Shop Men Fashion" }).click();
  24  | 
  25  |     await page.waitForLoadState("domcontentloaded");
  26  | 
  27  |     const products = page.locator("div.product-item");
  28  |     const countEachProduct = await products.count();
  29  | 
  30  |     console.log("Total products:", countEachProduct);
  31  | 
  32  |     for (let i = 0; i < countEachProduct; i++) {
  33  |         const product = products.nth(i);
  34  |         const productName = (await product.getByRole("link").first().textContent())?.trim(); //a.h6
  35  |         console.log("Checking product:", productName);
  36  |         if (shirtName.includes(productName)) {
  37  |             await product.locator("button.addToCart").click();
  38  |             console.log("Product added:", productName);
  39  |         }
  40  |     }
  41  | 
  42  |     //click on cart button
  43  |     await page.locator("#cartdesk").click();
  44  | 
  45  |     //now verify selected product are added to cart
  46  |      // Capture the selected products before checkout
  47  |     const selectedProduct = page.locator("tbody tr");
  48  |     const items = [];
  49  |     const verifyProduct = await selectedProduct.count();
  50  | 
  51  |     console.log("Selected Products are :", verifyProduct);
  52  | 
  53  |     for (let i = 0; i < verifyProduct; i++) {
  54  |         const finalProductName = (await selectedProduct.nth(i).locator("td.align-left").textContent())?.trim();
  55  |         console.log("Cart Products:", finalProductName)
  56  | 
  57  |         if (shirtName.includes(finalProductName)) {
  58  |             console.log("Product matched: ", finalProductName)
  59  |         } else {
  60  |             console.log("Product not matched: ", finalProductName)
  61  |         }
  62  | 
  63  |         if (finalProductName && shirtName.includes(finalProductName)) {
  64  |             items.push({
  65  |                 productName: finalProductName,
  66  |                 quantity: 1
  67  |             });
  68  |         }
  69  |     }
  70  | 
  71  |     await page.locator("#checkoutBtn").click();
  72  |     await page.locator("#firstname").fill("Mr Beam");
  73  |     await page.locator("#middlename").fill(" ");
  74  |     await page.locator("#lastname").fill("Khan");
  75  |     await page.locator("#email").fill("mryour@gmail.com");
  76  |     await page.locator("#phone").fill("9988112200");
  77  |     await page.locator("#address").fill("Beside your Home");
  78  |     await page.locator("#states").fill("Telanagan");
  79  |     await page.locator("#city").fill("Warangle");
  80  |     await page.locator("#pincode").fill("300015");
  81  | 
  82  |     // const price = await page.locator("#totalPrice").textContent();
  83  |     // console.log("Total price of Order is: ", price);
  84  | 
  85  |     const totalText = await page
  86  |     .getByRole("heading", { name: /^\$\d+$/ })
  87  |     .last()
  88  |     .textContent();
  89  | 
  90  | console.log("Total price:", totalText);
  91  | 
  92  | const totalAmount = Number(
  93  |     totalText.replace(/[$,]/g, "").trim()
  94  | );
  95  | 
  96  |     await page.getByTestId("continue-btn").click();
  97  |     // await page.getByRole("button", {text : "Place Order"}).click();
  98  |     await page.getByTestId("place-order-btn").click();
  99  | 
  100 |     
  101 | await expect(page.locator("div h1"))
  102 |     .toHaveText("🎉 Thank You for Your Order!");
  103 | 
  104 | const confirmationText = await page.locator("body").innerText();
  105 | console.log("Order confirmation:", confirmationText);
  106 | 
  107 | const match = confirmationText.match(
  108 |     /Order\s*(?:ID|Number|#)\s*[:#-]?\s*([A-Z0-9-]+)/i
  109 | );
  110 | 
  111 | if (!match) {
> 112 |     throw new Error("Order ID not found. Check the confirmation text.");
      |           ^ Error: Order ID not found. Check the confirmation text.
  113 | }
  114 | 
  115 | const orderNumber = match[1];
  116 | 
  117 | console.log("Order number:", orderNumber);
  118 | console.log("Total amount:", totalAmount);
  119 | console.log("Items:", items);
  120 | 
  121 | await savePlacedOrder({
  122 |     orderNumber,
  123 |     totalAmount,
  124 |     items
  125 | });
  126 | 
  127 | console.log("Order saved successfully:", orderNumber);
  128 | 
  129 | 
  130 | });
```