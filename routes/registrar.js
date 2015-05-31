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

/* GET registrar listing. */
router.get('/', function (req, res, next) {
    res.render('user/registrar', {title: 'Registrar usuario'});
});

router.post('/:datos?', function (req, res, next) {
    var datos = req.params.datos;
    connection.query("INSERT INTO usuarioE Id= " + datos, function (err, rows) {
        console.log(rows);
        res.render('user/dashboard', {tittle: 'Detalles del usuario', usuarios: rows});
    });
})

module.exports = router;

