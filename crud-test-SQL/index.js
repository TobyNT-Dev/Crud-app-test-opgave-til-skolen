import mysql from 'mysql'

const connection = mysql.createConnection ({
    host: "127.0.0.1",
    user: "root",
    password: "xxz78dfc",
    database: "webshop"
});

// connection.connect(function (err) {
//     if (err) throw err;
//     connection.query("SELECT * FROM customers", function(err, result, fields){
//         if (err) throw err;
//         console.log(result)
//     })
// })

// 1.
// connection.connect(function (err) {
//     if (err) throw err;
//     const sql = "SELECT * FROM customers ORDER BY cname asc"
//     connection.query(sql, function(err, result){
//         if (err) throw err;
//         console.log(result)
//     })
// })

// 2.
// connection.connect(function (err) {
//     if (err) throw err;
//     const sql = "SELECT * FROM customers WHERE cid = 8 OR cid = 9"
//     connection.query(sql, function(err, result){
//         if (err) throw err;
//         console.log(result)
//     })
// })

// 3.
// connection.connect(function (err) {
//     if (err) throw err;
//     const sql = "SELECT cid, cname FROM customers ORDER BY cname desc LIMIT 5"
//     connection.query(sql, function(err, result){
//         if (err) throw err;
//         console.log(result)
//     })
// })

// 4.
// connection.connect(function (err) {
//     if (err) throw err;
//     const sql = "SELECT cname FROM customers WHERE cid = 4"
//     connection.query(sql, function(err, result){
//         if (err) throw err;
//         console.log(result)
//     })
// })

// 5.
// connection.connect(function (err) {
//     if (err) throw err;
//     const sql = "SELECT * FROM customers ORDER BY email asc"
//     connection.query(sql, function(err, result){
//         if (err) throw err;
//         console.log(result)
//     })
// })

// 6.
// connection.connect(function (err) {
//     if (err) throw err;
//     const sql = "SELECT * FROM customers WHERE cid = 6"
//     connection.query(sql, function(err, result){
//         if (err) throw err;
//         console.log(result)
//     })
// })

// 7.
// connection.connect(function (err) {
//     if (err) throw err;
//     const sql = "SELECT cname, address FROM customers"
//     connection.query(sql, function(err, result){
//         if (err) throw err;
//         console.log(result)
//     })
// })

// 8.
// connection.connect(function (err) {
//     if (err) throw err;
//     const sql = "SELECT phone FROM customers WHERE cid = 8"
//     connection.query(sql, function(err, result){
//         if (err) throw err;
//         console.log(result)
//     })
// })

// 9.
// connection.connect(function (err) {
//     if (err) throw err;
//     const sql = "UPDATE customers SET address = 'Hugborgvej 7' WHERE cid = 7"
//     connection.query(sql, function(err, result){
//         if (err) throw err;
//         console.log(result)
//     })
// })

// 10.
// connection.connect(function (err) {
//     if (err) throw err;
//     const sql = "INSERT INTO customers (cname, address, cid, email, phone) VALUES ?";
//     const values = [
//         ['Betty', 'Johannesvej 12', '13', 'betty@techcollege.dk', '58476315'],
//         ['Susanne', 'Jordbærvej 54', '15', 'susanne@techcollege.dk', '21456587'],
//         ['Martin', 'Lakridsvej 90', '14', 'martin@techcollege.dk', '41257896'],
//         ['Kim', 'Gulerodsvej 76', '16', 'kim@techcollege.dk', '41255748'],
//         ['Eva', 'Regnbuegade 1', '17', 'eva@techcollege.dk', '44112255']
//     ];
//     connection.query(sql, [values], function(err, result){
//         if (err) throw err;
//         console.log(result)
//     })
// })

// 11.
// connection.connect(function (err) {
//     if (err) throw err;
//     const sql = "DELETE FROM customers WHERE cid = 6"
//     connection.query(sql, function(err, result){
//         if (err) throw err;
//         console.log(result)
//     })
// })