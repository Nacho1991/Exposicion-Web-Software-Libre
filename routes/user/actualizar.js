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
        res.render('user/actualizar', {tittle: 'Actualizar usuario', usuarios: rows});
    });
});
module.exports = router;