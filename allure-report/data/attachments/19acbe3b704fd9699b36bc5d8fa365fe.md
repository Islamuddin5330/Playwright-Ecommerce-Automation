# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dbConnection.spec.js >> Connect to MySQL database
- Location: tests\dbConnection.spec.js:5:1

# Error details

```
Error: Access denied for user ''@'localhost' (using password: YES)
```

# Test source

```ts
  1  | 
  2  | const { test, expect } = require('@playwright/test');
  3  | const db = require('../utils/db');
  4  | 
  5  | test('Connect to MySQL database', async () => {
> 6  |     const [rows] = await db.query(
     |                             ^ Error: Access denied for user ''@'localhost' (using password: YES)
  7  |         'SELECT DATABASE() AS database_name'
  8  |     );
  9  | 
  10 |     console.log('Connected database:', rows[0].database_name);
  11 | 
  12 |     expect(rows[0].database_name)
  13 |         .toBe('playwright_test_db');
  14 | });
  15 | 
  16 | test.afterAll(async () => {
  17 |     await db.end();
  18 | });
```