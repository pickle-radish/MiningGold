const mysql=require('mysql');

const con=mysql.createConnection({
    host: 'localhost',
    database: 'mining_gold',
    user: 'root',
    password: 'mysql',
    port: '3306'
});

module.exports=con;