const mysql = require('mysql');

// CONNECTION A LA BASE DE DONNÉE
const db = mysql.createConnection({
    host: 'localhost',
    database: "myProjoBB",
    user: "root",
    password: "root",
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});
db.connect((err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("CONNECTED TO DATABASE")
    }
});
// J'EXPORT MA BASE DE DONNÉE 
module.exports = db

