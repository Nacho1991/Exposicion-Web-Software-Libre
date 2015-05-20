var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    database: 'dbExposicion',
    user: 'root',
    password: '42405659i',
    charset: 'utf8'
});
connection.connect(function (err) {
    if (!err) {
        console.log("Se ha conectado con éxito a la base de datos...");
    } else {
        console.log("Error inesperado al intentar conectar la base de datos. Error: " + err);
    }
});
/* GET dashboard listing. */
router.get('/', function (req, res, next) {
    connection.query("SELECT * FROM usuario", function (err, rows, fields) {
        if (!err) {
            res.render('user/dashboard', {tittle: 'Dashboard', usuarios: rows});
        } else {
            console.log('Error: ' + err);
        }
    });
});
module.exports = router;
