var express = require('express');
var router = express.Router();

/* GET dashboard listing. */
router.get('/', function (req, res, next) {
    res.render('user/detalles', {title: 'Detalles de usuario'});
});
module.exports = router;