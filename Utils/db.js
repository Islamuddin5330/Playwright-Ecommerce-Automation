const mysql = require('mysql2/promise'); 

// const db = mysql.createPool({
//     host: 'localhost', 
//     user: 'root', 
//     password: 'Waheeduddin@001', 
//     database: 'playwright_test_db', 
//     port: 3306 
// });

//for github
const db = mysql.createPool({
    host: process.env.DB_HOST || "127.0.0.1",
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "playwright_test_db" 
});

 module.exports = db;
//  module.exports = pool;