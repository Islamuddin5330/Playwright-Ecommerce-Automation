# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: placeOrderDatabase.spec.js >> Add Product to the Carts
- Location: tests\placeOrderDatabase.spec.js:6:5

# Error details

```
Test timeout of 30000ms exceeded.
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
        - /url: "#"
      - generic [ref=f5e21]: / Checkout
    - link " Go To Back" [ref=f5e23] [cursor=pointer]:
      - /url: cart.php
      - generic [ref=f5e24]: 
      - text: Go To Back
  - generic [ref=f5e27]:
    - generic [ref=f5e28]:
      - heading "Billing Address" [level=5] [ref=f5e29]
      - generic [ref=f5e30]:
        - text: "* fields are mandatory"
        - generic [ref=f5e31]:
          - generic [ref=f5e32]:
            - generic [ref=f5e33]: First Name*
            - textbox "First Name*" [ref=f5e34]:
              - /placeholder: Enter First Name
            - alert
          - generic [ref=f5e35]:
            - generic [ref=f5e36]: Middle Name
            - textbox "Middle Name" [ref=f5e37]:
              - /placeholder: Enter Middle Name
          - generic [ref=f5e38]:
            - generic [ref=f5e39]: Last Name*
            - textbox "Last Name*" [ref=f5e40]:
              - /placeholder: Enter Last Name
            - alert
          - generic [ref=f5e41]:
            - generic [ref=f5e42]: E-mail*
            - textbox "E-mail*" [ref=f5e43]:
              - /placeholder: example@email.com
            - alert
          - generic [ref=f5e44]:
            - generic [ref=f5e45]: Mobile No.*
            - spinbutton "Mobile No.*" [ref=f5e46]
            - alert
          - generic [ref=f5e47]:
            - generic [ref=f5e48]: Address*
            - textbox "Address*" [ref=f5e49]:
              - /placeholder: Enter Address
            - alert
          - generic [ref=f5e50]:
            - generic [ref=f5e51]: State*
            - textbox "State*" [ref=f5e52]:
              - /placeholder: Enter State
            - alert
          - generic [ref=f5e53]:
            - generic [ref=f5e54]: City*
            - textbox "City*" [ref=f5e55]:
              - /placeholder: Enter City
            - alert
          - generic [ref=f5e56]:
            - generic [ref=f5e57]: Pin Code*
            - spinbutton "Pin Code*" [ref=f5e58]
            - alert
    - generic [ref=f5e59]:
      - heading "Order Total" [level=5] [ref=f5e60]
      - generic [ref=f5e62]:
        - generic [ref=f5e63]:
          - heading "Payment" [level=4] [ref=f5e65]
          - generic [ref=f5e66]:
            - heading "Total" [level=5] [ref=f5e67]
            - heading "$2021" [level=5] [ref=f5e68]
        - button "Continue" [ref=f5e70] [cursor=pointer]
      - generic [ref=f5e72]:
        - generic [ref=f5e73]:
          - heading "Cart" [level=4] [ref=f5e74]
          - heading "" [level=4] [ref=f5e75]
        - table [ref=f5e77]:
          - row [ref=f5e78]:
            - cell "White T-Shirt" [ref=f5e79]
            - cell "$500" [ref=f5e80]
            - cell "1" [ref=f5e81]
            - cell "$500" [ref=f5e82]
          - row [ref=f5e83]:
            - cell "Blue Pant" [ref=f5e84]
            - cell "$240" [ref=f5e85]
            - cell "1" [ref=f5e86]
            - cell "$240" [ref=f5e87]
          - row [ref=f5e88]:
            - cell "White Sports Shoes" [ref=f5e89]
            - cell "$450" [ref=f5e90]
            - cell "1" [ref=f5e91]
            - cell "$450" [ref=f5e92]
          - row [ref=f5e93]:
            - cell "White Sports Shoes" [ref=f5e94]
            - cell "$475" [ref=f5e95]
            - cell "1" [ref=f5e96]
            - cell "$475" [ref=f5e97]
          - row [ref=f5e98]:
            - cell "Black Sandal" [ref=f5e99]
            - cell "$356" [ref=f5e100]
            - cell "1" [ref=f5e101]
            - cell "$356" [ref=f5e102]
  - paragraph [ref=f5e106]:
    - text: © 2026
    - link "QA Automation Labs" [ref=f5e107] [cursor=pointer]:
      - /url: "#"
    - text: . All Rights Reserved.
  - text: 
  - generic [ref=f5e108]:
    - button "Inspect locators" [ref=f5e109] [cursor=pointer]:
      - generic [ref=f5e110]: 
    - button "Toggle dark mode" [ref=f5e111] [cursor=pointer]:
      - generic [ref=f5e112]: 
    - button "Toggle challenge mode" [ref=f5e113] [cursor=pointer]:
      - generic [ref=f5e114]: 
```