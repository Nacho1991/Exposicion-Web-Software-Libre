var express = require('express');
var router = express.Router();

/* GET dashboard listing. */
router.get('/', function (req, res, next) {
    res.render('user/eliminar', {title: 'Eliminar usuario'});
});
module.exports = router;