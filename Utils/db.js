const mysql = require('mysql2/promise'); 

const db = mysql.createPool({
    host: 'localhost', 
    user: 'root', 
    password: 'Waheeduddin@001', 
    database: 'playwright_test_db', 
    port: 3306 
});

 module.exports = db;