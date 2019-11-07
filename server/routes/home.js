const express = require('express');
const app = express();

const home = express.Router();


home.get('/', (req, res) => {
    res.send(`<h1>HOME</h1>`)
})


module.exports = home;