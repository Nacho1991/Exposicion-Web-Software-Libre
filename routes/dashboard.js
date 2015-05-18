var express = require('express');
var router = express.Router();

/* GET dashboard listing. */
router.get('/', function (req, res, next) {
    res.render('dashboard', {title: 'Dashboard'});
});

router.get('actualizar/:id', function (req, res) {
    var id = req.params.id;
    if (isNaN(id)) {
        userModel.getUser(id, function (error, data) {
            if (typeof data !== 'undefined' && data.length > 0) {
                res.render("index", {
                    title: "Formulario",
                    info: data
                });
            } else {
                res.json(404, {"msg": "notExist"});
            }
        });
    } else {
        res.json(500, {"msg": "The id must be numeric"});
    }
});
router.get("/create", function (req, res) {
    res.render("registrar", {
        title: "Nuevo usuario"
    });
});
module.exports = router;
