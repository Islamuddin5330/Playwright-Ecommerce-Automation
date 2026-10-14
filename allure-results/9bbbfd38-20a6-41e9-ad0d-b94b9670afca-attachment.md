# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pageObject\placeOrderByPageObject.spec.js >> Add Product to the Carts
- Location: tests\pageObject\placeOrderByPageObject.spec.js:8:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'productName')
```

# Page snapshot

```yaml
- generic [active] [ref=f3e1]:
  - banner [ref=f3e2]:
    - generic [ref=f3e3]:
      - link [ref=f3e4] [cursor=pointer]:
        - /url: shop.php
        - img "QA Automation Labs" [ref=f3e5]
      - button "Toggle navigation" [ref=f3e6] [cursor=pointer]: ☰
      - generic [ref=f3e7]:
        - generic [ref=f3e8]:
          - link "Cart" [ref=f3e9] [cursor=pointer]:
            - /url: cart.php
            - generic [ref=f3e10]: 
            - generic [ref=f3e11]: "5"
          - button "Logout" [ref=f3e12] [cursor=pointer]:
            - generic [ref=f3e13]: 
        - search [ref=f3e14]:
          - searchbox "Search" [ref=f3e15]
  - generic [ref=f3e17]:
    - navigation [ref=f3e19]:
      - link "Home" [ref=f3e20] [cursor=pointer]:
        - /url: https://shop.qaautomationlabs.com/
      - generic [ref=f3e21]: / Cart
    - link " Go To Back" [ref=f3e23] [cursor=pointer]:
      - /url: shop.php
      - generic [ref=f3e24]: 
      - text: Go To Back
  - generic [ref=f3e26]:
    - generic [ref=f3e28]:
      - generic [ref=f3e30]:
        - heading "Cart" [level=4] [ref=f3e31]
        - heading "" [level=4] [ref=f3e32]
      - generic [ref=f3e34]:
        - generic [ref=f3e35]:
          - heading "Total" [level=5] [ref=f3e36]
          - 'heading "Total: $2021" [level=5] [ref=f3e37]'
        - link "Proceed To Checkout" [ref=f3e39] [cursor=pointer]:
          - /url: checkout.php
    - generic [ref=f3e40]:
      - heading "Cart Summary" [level=5] [ref=f3e41]
      - table [ref=f3e42]:
        - rowgroup [ref=f3e43]:
          - row [ref=f3e44]:
            - columnheader "Products" [ref=f3e45]
            - columnheader "Price" [ref=f3e46]
            - columnheader "Quantity" [ref=f3e47]
            - columnheader "Total" [ref=f3e48]
            - columnheader "Remove" [ref=f3e49]
        - rowgroup [ref=f3e50]:
          - row [ref=f3e51]:
            - cell [ref=f3e52]:
              - img "White T-Shirt" [ref=f3e53]
              - text: White T-Shirt
            - cell "$500" [ref=f3e54]
            - cell [ref=f3e55]:
              - spinbutton "Quantity for White T-Shirt" [ref=f3e56]: "1"
            - cell "$500" [ref=f3e57]
            - cell [ref=f3e58]:
              - button "Remove White T-Shirt from cart" [ref=f3e59] [cursor=pointer]:
                - generic [ref=f3e60]: 
          - row [ref=f3e61]:
            - cell [ref=f3e62]:
              - img "Blue Pant" [ref=f3e63]
              - text: Blue Pant
            - cell "$240" [ref=f3e64]
            - cell [ref=f3e65]:
              - spinbutton "Quantity for Blue Pant" [ref=f3e66]: "1"
            - cell "$240" [ref=f3e67]
            - cell [ref=f3e68]:
              - button "Remove Blue Pant from cart" [ref=f3e69] [cursor=pointer]:
                - generic [ref=f3e70]: 
          - row [ref=f3e71]:
            - cell [ref=f3e72]:
              - img "White Sports Shoes" [ref=f3e73]
              - text: White Sports Shoes
            - cell "$450" [ref=f3e74]
            - cell [ref=f3e75]:
              - spinbutton "Quantity for White Sports Shoes" [ref=f3e76]: "1"
            - cell "$450" [ref=f3e77]
            - cell [ref=f3e78]:
              - button "Remove White Sports Shoes from cart" [ref=f3e79] [cursor=pointer]:
                - generic [ref=f3e80]: 
          - row [ref=f3e81]:
            - cell [ref=f3e82]:
              - img "White Sports Shoes" [ref=f3e83]
              - text: White Sports Shoes
            - cell "$475" [ref=f3e84]
            - cell [ref=f3e85]:
              - spinbutton "Quantity for White Sports Shoes" [ref=f3e86]: "1"
            - cell "$475" [ref=f3e87]
            - cell [ref=f3e88]:
              - button "Remove White Sports Shoes from cart" [ref=f3e89] [cursor=pointer]:
                - generic [ref=f3e90]: 
          - row [ref=f3e91]:
            - cell [ref=f3e92]:
              - img "Black Sandal" [ref=f3e93]
              - text: Black Sandal
            - cell "$356" [ref=f3e94]
            - cell [ref=f3e95]:
              - spinbutton "Quantity for Black Sandal" [ref=f3e96]: "1"
            - cell "$356" [ref=f3e97]
            - cell [ref=f3e98]:
              - button "Remove Black Sandal from cart" [ref=f3e99] [cursor=pointer]:
                - generic [ref=f3e100]: 
  - paragraph [ref=f3e104]:
    - text: © 2026
    - link "QA Automation Labs" [ref=f3e105] [cursor=pointer]:
      - /url: "#"
    - text: . All Rights Reserved.
  - text: 
  - generic [ref=f3e106]:
    - button "Inspect locators" [ref=f3e107] [cursor=pointer]:
      - generic [ref=f3e108]: 
    - button "Toggle dark mode" [ref=f3e109] [cursor=pointer]:
      - generic [ref=f3e110]: 
    - button "Toggle challenge mode" [ref=f3e111] [cursor=pointer]:
      - generic [ref=f3e112]: 
```

# Test source

```ts
  1  | class productSummary{
  2  | 
  3  |     constructor(page){
  4  |         this.page = page;
  5  | 
  6  |         this.selectedProduct = page.locator("tbody tr");
  7  |         this.productName = page.locator("td.align-left");
  8  |         this.proceedBtn = page.locator("#checkoutBtn");
  9  | 
  10 |     }
  11 | 
  12 |     async getCheckSelectedProduct(shirtName){
  13 |         await this.selectedProduct.first().waitFor();
  14 |         const verifyProduct = await this.selectedProduct.count();
  15 | 
  16 |         console.log("Selected Products are :", verifyProduct);
  17 | 
  18 |         for(let i=0; i<verifyProduct; i++){
> 19 |             const finalProductName = (await this.selectedProduct.nth(i).this.productName.textContent())?.trim();
     |                                                                             ^ TypeError: Cannot read properties of undefined (reading 'productName')
  20 |             console.log("Cart Products:", finalProductName)
  21 | 
  22 |             if (shirtName.includes(finalProductName)) {
  23 |             console.log("Product matched: ", finalProductName)
  24 |         } else {
  25 |             console.log("Product not matched: ", finalProductName)
  26 |         }
  27 |         }
  28 |     }
  29 | 
  30 |     async getProceedBtn(){
  31 |         await this.proceedBtn.click();
  32 |     }
  33 | }
  34 | 
  35 | module.exports = {productSummary};
```