var express = require('express');
var router = express.Router();

/* GET registrar listing. */
router.get('/', function (req, res, next) {
    res.render('user/actualizar', {title: 'Actualizar usuario'});
});

function actualizar() {
    router.put('/actualizar', function (req, res) {
        
    });
}
module.exports = router;