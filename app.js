var express = require('express');
var mysql = require('mysql');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var dashboard = require('./routes/user/dashboard');
var registrar = require('./routes/user/registrar');
var detalles = require('./routes/user/detalles');
var eliminar = require('./routes/user/eliminar');
var actualizar = require('./routes/user/actualizar');
var modelsUser = require('./models/user');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/user/dashboard', dashboard);
app.use('/user/registrar', registrar);
app.use('/user/actualizar', actualizar);
app.use('/user/eliminar', eliminar);
app.use('/user/detalles', detalles);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//Tenemos que agregar este fragmento de código para poder ejecutar el servidor
app.listen(3000, function () {
    console.log("Express server listening on port %d in %s mode", app.adress, app.settings.env);
});
module.exports = app;
