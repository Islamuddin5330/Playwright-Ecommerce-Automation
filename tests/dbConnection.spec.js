
const { test, expect } = require('@playwright/test');
const db = require('../utils/db');

test('Connect to MySQL database', async () => {
    const [rows] = await db.query(
        'SELECT DATABASE() AS database_name');

    console.log('Connected database:', rows[0].database_name);

    expect(rows[0].database_name).toBe('playwright_test_db');
});

test.afterAll(async () => {
    await db.end();
});