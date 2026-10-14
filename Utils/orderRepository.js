
const db = require("./db");

async function savePlacedOrder({ totalAmount, items }) {
    const connection = await db.getConnection();

    try {
        await connection.beginTransaction();

        // Create a temporary unique order number.
        // The id column is generated automatically by MySQL.
        const temporaryOrderNumber = `TEMP-${Date.now()}-${Math.floor(Math.random() * 100000)}`;

        const [result] = await connection.execute(
            `INSERT INTO orders (order_number, status, total_amount)
             VALUES (?, ?, ?)`,
            [temporaryOrderNumber, "PLACED", totalAmount]
        );

        const id = result.insertId;

        // Generate a readable order number: 001, 002, 003...
        const orderNumber = String(id).padStart(3, "0");

        await connection.execute(
            `UPDATE orders
             SET order_number = ?
             WHERE id = ?`,
            [orderNumber, id]
        );

        // Save each product against the generated order number.
        for (const item of items) {
            await connection.execute(
                `INSERT INTO order_items
                    (order_number, product_name, quantity)
                 VALUES (?, ?, ?)`,
                [orderNumber, item.productName, item.quantity]
            );
        }

        await connection.commit();

        console.log("Order saved successfully:", orderNumber);
        return orderNumber;

    } catch (error) {
        await connection.rollback();
        console.error("Failed to save order:", error.message);
        throw error;

    } finally {
        connection.release();
    }
}

module.exports = { savePlacedOrder };
