var express = require('express');
var router = express.Router();


/* GET registrar listing. */
router.get('/', function (req, res, next) {
    res.render('user/registrar', {title: 'Registrar usuario'});
});

module.exports = router;

