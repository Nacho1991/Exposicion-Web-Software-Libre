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
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get('/registrar', function (req, res, next) {
    res.render('registrar', {tittle: 'Registrar'});
})

router.post('/new', function (req, res) {
    var nombre = req.body.nombre;
    var apellidos = req.body.apellidos;
    var nombreusuario = req.body.nombreusuario;
    var verificarcontrasenna = req.body.verificarcontrasenna;
    var contrasenna = req.body.contrasenna;
    connection.query("INSERT INTO usuario (nombre, apellidos, nombre_usuario, contrasenna)VALUES(?,?,?,?)",[nombre,apellidos,nombreusuario,contrasenna], function (err, rows) {
        if (!err) {
            connection.query("SELECT * FROM usuario", function (err, rows, fields) {
                if (!err) {
                    res.render('dashboard', {tittle: 'Dashboard', usuarios: rows});
                } else {
                    console.log('Error: ' + err);
                }
            });
        } else {
            console.log(err);
        }
    });
})

/* GET dashboard listing. */
router.get('/dashboard', function (req, res, next) {
    connection.query("SELECT * FROM usuario", function (err, rows, fields) {
        if (!err) {
            res.render('dashboard', {tittle: 'Dashboard', usuarios: rows});
        } else {
            console.log('Error: ' + err);
        }
    });
});

/* GET dashboard listing. */
router.get('/detalles/:id', function (req, res, next) {
    var id = req.params.id;
    connection.query("SELECT * FROM usuario WHERE Id= " + id, function (err, rows) {
        res.render('detalles', {tittle: 'Detalles del usuario', usuarios: rows});
    });
});
/* GET registrar listing. */
router.get('/actualizar/:id?', function (req, res, next) {
    var id = req.params.id;
    connection.query("SELECT * FROM usuario WHERE Id= " + id, function (err, rows) {
        console.log(rows);
        res.render('actualizar', {tittle: 'Actualizar usuario', usuarios: rows});
    });
});
router.delete('/eliminar/:id', function (req, res) {
    console.log(req);
    var id = req.params.id;
    console.log(id);
    connection.query("DELETE FROM usuario WHERE Id = " + id, function (err, rows) {
        if (!err) {
            connection.query("SELECT * FROM usuario", function (err, rows) {
                console.log(rows);
                res.render('dashboard', {tittle: 'Eliminar usuario', usuarios: rows});
            });
        } else {
            console.log(err);
        }
    });
});
module.exports = router;
