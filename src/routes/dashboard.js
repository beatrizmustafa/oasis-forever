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

router.get("/dadosQuestionario", function (req, res) {
    dashboardController.buscarDadosQuestionario(req, res);
});

router.get("/respostasPorDia", function (req, res) {
    dashboardController.buscarRespostasPorDia(req, res);
});

router.get("/respostasPeriodo", function (req, res) {
    dashboardController.buscarRespostasPeriodo(req, res);
});

module.exports = router;