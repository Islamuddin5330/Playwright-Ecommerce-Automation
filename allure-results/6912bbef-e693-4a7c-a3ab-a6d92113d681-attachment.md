# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: placeOrderDatabase.spec.js >> Add Product to the Cart and Save Order in MySQL
- Location: tests\placeOrderDatabase.spec.js:6:5

# Error details

```
Error: Field 'order_number' doesn't have a default value
```

# Test source

```ts
  1  | 
  2  | const db = require("./db");
  3  | 
  4  | async function savePlacedOrder({ totalAmount, items }) {
  5  |     const connection = await db.getConnection();
  6  | 
  7  |     try {
  8  |         await connection.beginTransaction();
  9  | 
  10 |         // MySQL generates the order number automatically
> 11 |         const [result] = await connection.execute(
     |                                           ^ Error: Field 'order_number' doesn't have a default value
  12 |             `INSERT INTO orders (status, total_amount)
  13 |              VALUES (?, ?)`,
  14 |             ["PLACED", totalAmount]
  15 |         );
  16 | 
  17 |         const orderNumber = result.insertId;
  18 | 
  19 |         console.log("Generated order number:", orderNumber);
  20 | 
  21 |         // Save products using the generated order number
  22 |         for (const item of items) {
  23 |             await connection.execute(
  24 |                 `INSERT INTO order_items
  25 |                     (order_number, product_name, quantity)
  26 |                  VALUES (?, ?, ?)`,
  27 |                 [orderNumber, item.productName, item.quantity]
  28 |             );
  29 |         }
  30 | 
  31 |         await connection.commit();
  32 | 
  33 |         console.log("Order saved successfully:", orderNumber);
  34 | 
  35 |         return orderNumber;
  36 | 
  37 |     } catch (error) {
  38 |         await connection.rollback();
  39 |         console.error("Failed to save order:", error.message);
  40 |         throw error;
  41 | 
  42 |     } finally {
  43 |         connection.release();
  44 |     }
  45 | }
  46 | 
  47 | module.exports = { savePlacedOrder };
  48 | 
```