const express = require('express');
const app = express();

const users = express.Router();

users.get('/', (req, res) => {
    res.send(`<h1>WELCOME TO USER PAGE</h1>`)
})
users.post('/', (req, res) => {
   console.log(req.body.username)
   console.log(req.body.password)
})

users.get('/add', (req, res) => {
    res.send(`<h1>PADE</h1>`)
})

// ATTENTION A L'ORDRE DES ROUTES  AVEC :NAME
users.get('/:name', (req, res) => {
    res.send(`<h1>WELCOME TO USER PAGE OF :  ${req.params.name}</h1>`)
})



module.exports = users;