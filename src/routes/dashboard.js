var express = require("express");
var router = express.Router();

// Importando o controller correto da dashboard
var dashboardController = require("../controllers/dashboardController");

router.get("/contarRespostas", function (req, res) {
    // Chamando o controller correto
    dashboardController.contarRespostas(req, res);
});

router.get("/resultadoPredominante", function (req, res) {
    dashboardController.resultadoPredominante(req, res);
});

module.exports = router;