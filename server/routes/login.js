const express = require('express');
const app = express();
const bodyParser = require('body-parser')
// IMPORTATION DE MA BASE DE DONNÉE
const db = require('./db_and_request/db')

// ---------PARTIE NODE MAILER-----------
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: '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'
    }
}))
// ---------------------------------------
app.use(bodyParser.urlencoded({
    extended: false
}))
const login = express.Router();
// -----------PARTIE INSCRIPTION----------- 
login.post('/register', async (req, res) => {
    // console.log(req.body)
    if (req.body) {
        let query2 = `INSERT INTO users3 (mail_user ,password_user) SELECT * FROM (SELECT ?,?) AS tmp WHERE NOT EXISTS ( SELECT * FROM users3 WHERE mail_user = ? )`
        db.query(query2, [req.body.email, req.body.password, req.body.email], function (err, result, fields) {
            if (err) throw err;
            // --------NODE MAILER------------
            transporter.sendMail({
                to: req.body.email,
                from: 'CralCompagny@gmail.com',
                subject: 'Vous êtes bien inscrit à notre site',
                html: `<h1> Bienvenue sur notre site !</h1>
                <p>Voici votre identifiant et votre mot de passe</p>
                <br>
                <br>
                <p>
                - Idendifiant : ${req.body.email} <br>
                - Mot de passe : ${req.body.password}</p>
                `
            })
            // ---------------------------------------
            res.json(result)
        });
    } else {
        console.log("C'EST PAS INSERÉ DANS LA BDD CRÉTIN");
    }
})
// -------------------LOGIN----------------------
login.post('/log', async (req, res) => {
    console.log(req.body.email);
    let query3 = `SELECT * FROM users3 WHERE mail_user = "${req.body.email}"`;
    db.query(query3, function async (err, result, fields) {
        if (err) {
            res.json(err)
        } else {
            // console.log(result);
            res.json(result)
        }
    });
})























module.exports = login;