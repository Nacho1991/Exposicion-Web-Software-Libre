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



function obtenerUsuarios() {
    connection.query('SELECT * FROM usuario', function (error, rows, fields) {
        if (error) {
            return ('Error inesperado: ', error);
        } else {
            return rows;
        }
    });
    connection.end();
}
function insertarUsuarios(nombre, apellidos, nombreUsuario, contrasenna) {
    connection.query('INSERT INTO usuario(nombre, apellidos, nombre_usuario, contrasenna) VALUES(?, ?, ?. ?)', [nombre, apellidos, nombreUsuario, contrasenna], function (error, result) {
        if (error) {
            throw error;
        } else {
            console.log(result);
        }
    }
    );
    connection.end();
}

