// MY REQUIRES
const bodyParser = require('body-parser')
const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
// ------------MY VARIABLES---------
const port = process.env.PORT || 5000;
// -------------MY MIDDLEWARE-----------
// ------------parse application/x-www-form-urlencodeN-----------
app.use(bodyParser.urlencoded({
    extended: false
}))
// ---------------parse application/json----------
app.use(bodyParser.json())
// --------MY REQUIRED ROUTES------------- 
const home = require('./routes/home')
const users = require('./routes/users')
const login = require('./routes/login')
// --------------MY ROUTES-----------
app.use('/', home)
app.use('/users', users)
app.use('/login', login)

// --------------MON PORT------------
app.listen(port, () => console.log(`C'EST CONNECTÉ BB, SUR LE PORT ${port} `));



