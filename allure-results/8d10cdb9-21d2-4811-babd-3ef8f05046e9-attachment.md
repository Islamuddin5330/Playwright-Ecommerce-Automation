# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pageObject\placeOrderByPageObject.spec.js >> Add Product to the Carts
- Location: tests\pageObject\placeOrderByPageObject.spec.js:6:5

# Error details

```
Error: Playwright Test did not expect test() to be called here.
Most common reasons include:
- You are calling test() in a configuration file.
- You are calling test() in a file that is imported by the configuration file.
- You have two different versions of @playwright/test. This usually happens
  when one of the dependencies in your package.json depends on @playwright/test.
- You are calling test() from an async test.describe() block. Only sync ones are supported.
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
  1  | import expect from "@playwright/test";
  2  | 
  3  | class homePage {
  4  | 
  5  |     constructor(page) {
  6  |         this.page =page;
  7  |         this.Menswear = page.locator("#qaNav");
  8  |         this.menswearBtn = page.getByRole("link", { name: "Shop Men Fashion" });
  9  |     }
  10 | 
  11 |     async getSelectMensWear(verify) {
> 12 |         await expect(this.Menswear).toContainText(verify);
     |                     ^ Error: Playwright Test did not expect test() to be called here.
  13 |         console.log("Login successful");
  14 |         // Go to Shop
  15 |         await this.menswearBtn.click();
  16 |         await this.page.waitForLoadState("domcontentloaded");
  17 |     }
  18 | }
  19 | 
  20 | module.exports = {homePage};
```