# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pageObject\placeOrderByPageObject.spec.js >> Add Product to the Carts
- Location: tests\pageObject\placeOrderByPageObject.spec.js:7:5

# Error details

```
ReferenceError: product is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
  - banner [ref=f2e2]:
    - generic [ref=f2e3]:
      - link [ref=f2e4] [cursor=pointer]:
        - /url: shop.php
        - img "QA Automation Labs" [ref=f2e5]
      - button "Toggle navigation" [ref=f2e6] [cursor=pointer]: ☰
      - generic [ref=f2e7]:
        - generic [ref=f2e8]:
          - link "Cart" [ref=f2e9] [cursor=pointer]:
            - /url: cart.php
            - generic [ref=f2e10]: 
            - generic [ref=f2e11]: "0"
          - button "Logout" [ref=f2e12] [cursor=pointer]:
            - generic [ref=f2e13]: 
        - search [ref=f2e14]:
          - searchbox "Search" [ref=f2e15]
  - generic [ref=f2e17]:
    - navigation [ref=f2e19]:
      - link "Home" [ref=f2e20] [cursor=pointer]:
        - /url: https://shop.qaautomationlabs.com/
      - generic [ref=f2e21]: / Mens Wear
    - link " Go To Back" [ref=f2e23] [cursor=pointer]:
      - /url: shop.php
      - generic [ref=f2e24]: 
      - text: Go To Back
  - generic [ref=f2e26]:
    - generic [ref=f2e27]:
      - heading "Filter by Type" [level=5] [ref=f2e28]
      - generic [ref=f2e29]:
        - generic [ref=f2e30]:
          - checkbox "Formal" [ref=f2e31]
          - generic [ref=f2e32]: Formal
        - generic [ref=f2e33]:
          - checkbox "Footwear" [ref=f2e34]
          - generic [ref=f2e35]: Footwear
      - heading "Filter by price" [level=5] [ref=f2e36]
      - generic [ref=f2e37]:
        - generic [ref=f2e38]:
          - checkbox "$0 - $100" [ref=f2e39]
          - generic [ref=f2e40]: $0 - $100
        - generic [ref=f2e41]:
          - checkbox "$101 - $200" [ref=f2e42]
          - generic [ref=f2e43]: $101 - $200
        - generic [ref=f2e44]:
          - checkbox "$201 - $300" [ref=f2e45]
          - generic [ref=f2e46]: $201 - $300
        - generic [ref=f2e47]:
          - checkbox "$301 - $400" [ref=f2e48]
          - generic [ref=f2e49]: $301 - $400
        - generic [ref=f2e50]:
          - checkbox "$401 - $500" [ref=f2e51]
          - generic [ref=f2e52]: $401 - $500
      - heading "Filter by size" [level=5] [ref=f2e53]
      - generic [ref=f2e54]:
        - generic [ref=f2e55]:
          - checkbox "Small" [ref=f2e56]
          - generic [ref=f2e57]: Small
        - generic [ref=f2e58]:
          - checkbox "Medium" [ref=f2e59]
          - generic [ref=f2e60]: Medium
        - generic [ref=f2e61]:
          - checkbox "Large" [ref=f2e62]
          - generic [ref=f2e63]: Large
        - generic [ref=f2e64]:
          - checkbox "Extra Large" [ref=f2e65]
          - generic [ref=f2e66]: Extra Large
        - generic [ref=f2e67]:
          - checkbox "Double Extra Large" [ref=f2e68]
          - generic [ref=f2e69]: Double Extra Large
      - heading "Filter by color" [level=5] [ref=f2e70]
      - generic [ref=f2e71]:
        - generic [ref=f2e72]:
          - checkbox "Black" [ref=f2e73]
          - generic [ref=f2e74]: Black
        - generic [ref=f2e75]:
          - checkbox "White" [ref=f2e76]
          - generic [ref=f2e77]: White
        - generic [ref=f2e78]:
          - checkbox "Red" [ref=f2e79]
          - generic [ref=f2e80]: Red
        - generic [ref=f2e81]:
          - checkbox "Blue" [ref=f2e82]
          - generic [ref=f2e83]: Blue
        - generic [ref=f2e84]:
          - checkbox "Green" [ref=f2e85]
          - generic [ref=f2e86]: Green
    - generic [ref=f2e87]:
      - generic [ref=f2e88]:
        - textbox "Search products" [ref=f2e90]
        - combobox "Sort products" [ref=f2e92]:
          - option "Sort by" [selected]
          - 'option "Price: Low to High"'
          - 'option "Price: High to Low"'
          - 'option "Name: A to Z"'
          - 'option "Name: Z to A"'
        - generic [ref=f2e93]: 20 products
      - generic [ref=f2e94]:
        - generic [ref=f2e96]:
          - generic [ref=f2e97]:
            - img "Black T-Shirt"
          - generic [ref=f2e98]:
            - link "Black T-Shirt" [ref=f2e99] [cursor=pointer]:
              - /url: product.php?id=21
            - heading "$150" [level=5] [ref=f2e101]
            - text: "Size: S | Color: Black Men - Formal"
            - button "Add Black T-Shirt to cart" [ref=f2e102] [cursor=pointer]:
              - generic [ref=f2e103]: 
              - text: Add to Cart
        - generic [ref=f2e105]:
          - generic [ref=f2e106]:
            - img "White T-Shirt"
          - generic [ref=f2e107]:
            - link "White T-Shirt" [ref=f2e108] [cursor=pointer]:
              - /url: product.php?id=22
            - heading "$500" [level=5] [ref=f2e110]
            - text: "Size: S | Color: White Men - Formal"
            - button "Add White T-Shirt to cart" [ref=f2e111] [cursor=pointer]:
              - generic [ref=f2e112]: 
              - text: Add to Cart
        - generic [ref=f2e114]:
          - generic [ref=f2e115]:
            - img "Green Shirt"
          - generic [ref=f2e116]:
            - link "Green Shirt" [ref=f2e117] [cursor=pointer]:
              - /url: product.php?id=23
            - heading "$200" [level=5] [ref=f2e119]
            - text: "Size: M | Color: Green Men - Formal"
            - button "Add Green Shirt to cart" [ref=f2e120] [cursor=pointer]:
              - generic [ref=f2e121]: 
              - text: Add to Cart
        - generic [ref=f2e123]:
          - generic [ref=f2e124]:
            - img "Black Short"
          - generic [ref=f2e125]:
            - link "Black Short" [ref=f2e126] [cursor=pointer]:
              - /url: product.php?id=24
            - heading "$100" [level=5] [ref=f2e128]
            - text: "Size: M | Color: Black Men - Formal"
            - button "Add Black Short to cart" [ref=f2e129] [cursor=pointer]:
              - generic [ref=f2e130]: 
              - text: Add to Cart
        - generic [ref=f2e132]:
          - generic [ref=f2e133]:
            - img "Blue Pant"
          - generic [ref=f2e134]:
            - link "Blue Pant" [ref=f2e135] [cursor=pointer]:
              - /url: product.php?id=25
            - heading "$240" [level=5] [ref=f2e137]
            - text: "Size: L | Color: Blue Men - Formal"
            - button "Add Blue Pant to cart" [ref=f2e138] [cursor=pointer]:
              - generic [ref=f2e139]: 
              - text: Add to Cart
        - generic [ref=f2e141]:
          - generic [ref=f2e142]:
            - img "Green Pant"
          - generic [ref=f2e143]:
            - link "Green Pant" [ref=f2e144] [cursor=pointer]:
              - /url: product.php?id=26
            - heading "$230" [level=5] [ref=f2e146]
            - text: "Size: L | Color: Green Men - Formal"
            - button "Add Green Pant to cart" [ref=f2e147] [cursor=pointer]:
              - generic [ref=f2e148]: 
              - text: Add to Cart
        - generic [ref=f2e150]:
          - generic [ref=f2e151]:
            - img "Black Pant"
          - generic [ref=f2e152]:
            - link "Black Pant" [ref=f2e153] [cursor=pointer]:
              - /url: product.php?id=27
            - heading "$350" [level=5] [ref=f2e155]
            - text: "Size: XL | Color: Black Men - Formal"
            - button "Add Black Pant to cart" [ref=f2e156] [cursor=pointer]:
              - generic [ref=f2e157]: 
              - text: Add to Cart
        - generic [ref=f2e159]:
          - generic [ref=f2e160]:
            - img "White Pant"
          - generic [ref=f2e161]:
            - link "White Pant" [ref=f2e162] [cursor=pointer]:
              - /url: product.php?id=28
            - heading "$180" [level=5] [ref=f2e164]
            - text: "Size: XL | Color: White Men - Formal"
            - button "Add White Pant to cart" [ref=f2e165] [cursor=pointer]:
              - generic [ref=f2e166]: 
              - text: Add to Cart
        - generic [ref=f2e168]:
          - generic [ref=f2e169]:
            - img "Red Pant"
          - generic [ref=f2e170]:
            - link "Red Pant" [ref=f2e171] [cursor=pointer]:
              - /url: product.php?id=29
            - heading "$400" [level=5] [ref=f2e173]
            - text: "Size: XXL | Color: Red Men - Formal"
            - button "Add Red Pant to cart" [ref=f2e174] [cursor=pointer]:
              - generic [ref=f2e175]: 
              - text: Add to Cart
        - generic [ref=f2e177]:
          - generic [ref=f2e178]:
            - img "Black Pant"
          - generic [ref=f2e179]:
            - link "Black Pant" [ref=f2e180] [cursor=pointer]:
              - /url: product.php?id=30
            - heading "$100" [level=5] [ref=f2e182]
            - text: "Size: XXL | Color: Black Men - Formal"
            - button "Add Black Pant to cart" [ref=f2e183] [cursor=pointer]:
              - generic [ref=f2e184]: 
              - text: Add to Cart
        - generic [ref=f2e186]:
          - generic [ref=f2e187]:
            - img "Black Sport Shoes"
          - generic [ref=f2e188]:
            - link "Black Sport Shoes" [ref=f2e189] [cursor=pointer]:
              - /url: product.php?id=31
            - heading "$250" [level=5] [ref=f2e191]
            - text: "Size: S | Color: Black Men - Footwear"
            - button "Add Black Sport Shoes to cart" [ref=f2e192] [cursor=pointer]:
              - generic [ref=f2e193]: 
              - text: Add to Cart
        - generic [ref=f2e195]:
          - generic [ref=f2e196]:
            - img "Black Flotter"
          - generic [ref=f2e197]:
            - link "Black Flotter" [ref=f2e198] [cursor=pointer]:
              - /url: product.php?id=32
            - heading "$350" [level=5] [ref=f2e200]
            - text: "Size: S | Color: Black Men - Footwear"
            - button "Add Black Flotter to cart" [ref=f2e201] [cursor=pointer]:
              - generic [ref=f2e202]: 
              - text: Add to Cart
        - generic [ref=f2e204]:
          - generic [ref=f2e205]:
            - img "Black Flotter"
          - generic [ref=f2e206]:
            - link "Black Flotter" [ref=f2e207] [cursor=pointer]:
              - /url: product.php?id=33
            - heading "$500" [level=5] [ref=f2e209]
            - text: "Size: M | Color: Black Men - Footwear"
            - button "Add Black Flotter to cart" [ref=f2e210] [cursor=pointer]:
              - generic [ref=f2e211]: 
              - text: Add to Cart
        - generic [ref=f2e213]:
          - generic [ref=f2e214]:
            - img "White Sports Shoes"
          - generic [ref=f2e215]:
            - link "White Sports Shoes" [ref=f2e216] [cursor=pointer]:
              - /url: product.php?id=34
            - heading "$450" [level=5] [ref=f2e218]
            - text: "Size: M | Color: White Men - Footwear"
            - button "Add White Sports Shoes to cart" [ref=f2e219] [cursor=pointer]:
              - generic [ref=f2e220]: 
              - text: Add to Cart
        - generic [ref=f2e222]:
          - generic [ref=f2e223]:
            - img "White Sports Shoes"
          - generic [ref=f2e224]:
            - link "White Sports Shoes" [ref=f2e225] [cursor=pointer]:
              - /url: product.php?id=35
            - heading "$475" [level=5] [ref=f2e227]
            - text: "Size: L | Color: White Men - Footwear"
            - button "Add White Sports Shoes to cart" [ref=f2e228] [cursor=pointer]:
              - generic [ref=f2e229]: 
              - text: Add to Cart
        - generic [ref=f2e231]:
          - generic [ref=f2e232]:
            - img "Black Sandal"
          - generic [ref=f2e233]:
            - link "Black Sandal" [ref=f2e234] [cursor=pointer]:
              - /url: product.php?id=36
            - heading "$356" [level=5] [ref=f2e236]
            - text: "Size: L | Color: Black Men - Footwear"
            - button "Add Black Sandal to cart" [ref=f2e237] [cursor=pointer]:
              - generic [ref=f2e238]: 
              - text: Add to Cart
        - generic [ref=f2e240]:
          - generic [ref=f2e241]:
            - img "Green Sandal"
          - generic [ref=f2e242]:
            - link "Green Sandal" [ref=f2e243] [cursor=pointer]:
              - /url: product.php?id=37
            - heading "$220" [level=5] [ref=f2e245]
            - text: "Size: XL | Color: Green Men - Footwear"
            - button "Add Green Sandal to cart" [ref=f2e246] [cursor=pointer]:
              - generic [ref=f2e247]: 
              - text: Add to Cart
        - generic [ref=f2e249]:
          - generic [ref=f2e250]:
            - img "Blue Sport Shoes"
          - generic [ref=f2e251]:
            - link "Blue Sport Shoes" [ref=f2e252] [cursor=pointer]:
              - /url: product.php?id=38
            - heading "$350" [level=5] [ref=f2e254]
            - text: "Size: XL | Color: Blue Men - Footwear"
            - button "Add Blue Sport Shoes to cart" [ref=f2e255] [cursor=pointer]:
              - generic [ref=f2e256]: 
              - text: Add to Cart
        - generic [ref=f2e258]:
          - generic [ref=f2e259]:
            - img "White Sport Shoes"
          - generic [ref=f2e260]:
            - link "White Sport Shoes" [ref=f2e261] [cursor=pointer]:
              - /url: product.php?id=39
            - heading "$485" [level=5] [ref=f2e263]
            - text: "Size: XXL | Color: White Men - Footwear"
            - button "Add White Sport Shoes to cart" [ref=f2e264] [cursor=pointer]:
              - generic [ref=f2e265]: 
              - text: Add to Cart
        - generic [ref=f2e267]:
          - generic [ref=f2e268]:
            - img "White Canvas Shoes"
          - generic [ref=f2e269]:
            - link "White Canvas Shoes" [ref=f2e270] [cursor=pointer]:
              - /url: product.php?id=40
            - heading "$445" [level=5] [ref=f2e272]
            - text: "Size: XXL | Color: White Men - Footwear"
            - button "Add White Canvas Shoes to cart" [ref=f2e273] [cursor=pointer]:
              - generic [ref=f2e274]: 
              - text: Add to Cart
  - paragraph [ref=f2e278]:
    - text: © 2026
    - link "QA Automation Labs" [ref=f2e279] [cursor=pointer]:
      - /url: "#"
    - text: . All Rights Reserved.
  - text: 
  - generic [ref=f2e280]:
    - button "Inspect locators" [ref=f2e281] [cursor=pointer]:
      - generic [ref=f2e282]: 
    - button "Toggle dark mode" [ref=f2e283] [cursor=pointer]:
      - generic [ref=f2e284]: 
    - button "Toggle challenge mode" [ref=f2e285] [cursor=pointer]:
      - generic [ref=f2e286]: 
```

# Test source

```ts
  1  | class addToCart{
  2  | 
  3  |     constructor(page){
  4  |         this.page = page;
  5  | 
  6  |         this.products = page.locator("div.product-item");
  7  | 
  8  |         this.cart = page.locator("#cartdesk");
  9  |     }
  10 | 
  11 |     async getSelectProduct(shirtName){
  12 |         // Wait until products are available
  13 |         await this.products.first().waitFor();
  14 |         const countEachProduct = await this.products.count();
  15 | 
  16 |         console.log("Total product: ", countEachProduct);
  17 | 
  18 |         for(let i=0; i<countEachProduct; i++){
  19 |             const productName = (await this.products.nth(i).getByRole("link").first().textContent())?.trim();
  20 | 
  21 |             console.log("Checking product:", productName);
  22 | 
  23 |             if (shirtName.includes(productName)) {
  24 | 
> 25 |                 await product.locator("button.addToCart").click();
     |                 ^ ReferenceError: product is not defined
  26 | 
  27 |                 console.log("Product added:", productName);
  28 |             }
  29 |         }
  30 |     }
  31 | 
  32 |     async goToCart(){
  33 |         await this.cart.click();
  34 |     }
  35 | }
  36 | 
  37 | module.exports = {addToCart};
```