var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var connection = mysql.createConnection({
    host: '127.0.0.1',
    database: 'dbExposicion',
    user: 'root',
    password: '42405659i',
    charset: 'utf8'
});
connection.connect(function (err) {
    if (err) {
        console.log("Error inesperado al intentar conectar la base de datos. Error: " + err);
    }
});
/* GET registrar listing. */
router.get('/:id?', function (req, res, next) {
    var id = req.params.id;
    connection.query("SELECT * FROM usuario WHERE Id= " + id, function (err, rows) {
        console.log(rows);
        res.render('user/eliminar', {tittle: 'Eliminar usuario', usuarios: rows});
    });
});
router.delete('/:id?', function (req, res) {
    var id = req.params.id;
    connection.query("DELETE FROM usuario WHERE Id = " + id, function (err, rows) {
        if (!err) {
            connection.query("SELECT * FROM usuario", function (err, rows) {
                console.log(rows);
                res.render('user/dashboard', {tittle: 'Eliminar usuario', usuarios: rows});
            });
        }
    });
});
module.exports = router;