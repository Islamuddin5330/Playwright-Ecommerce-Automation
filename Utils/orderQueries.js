
const db = require('./db');

async function savePlacedOrder({orderNumber,totalAmount,items}) {
    const connection = await db.getConnection();

    try {
        await connection.beginTransaction();

        await connection.execute(
            `INSERT INTO orders
                (order_number, status, total_amount)
             VALUES (?, ?, ?)`,
            [orderNumber, 'PLACED', totalAmount]
        );

        for (const item of items) {
            await connection.execute(
                `INSERT INTO order_items
                    (order_number, product_name, quantity)
                 VALUES (?, ?, ?)`,
                [
                    orderNumber,
                    item.productName,
                    item.quantity
                ]
            );
        }

        await connection.commit();
        return true;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
    }
}

async function getOrderDetails(orderNumber) {
    const [rows] = await db.execute(
        `SELECT
            o.order_number,
            o.status,
            o.total_amount,
            i.product_name,
            i.quantity
         FROM orders o
         LEFT JOIN order_items i
           ON i.order_number = o.order_number
         WHERE o.order_number = ?`,
        [orderNumber]
    );

    return rows;
}

async function updateOrderStatus(orderNumber, status) {
    const [result] = await db.execute(
        `UPDATE orders
         SET status = ?
         WHERE order_number = ?`,
        [status, orderNumber]
    );

    return result.affectedRows;
}

module.exports = {
    savePlacedOrder,
    getOrderDetails,
    updateOrderStatus
};