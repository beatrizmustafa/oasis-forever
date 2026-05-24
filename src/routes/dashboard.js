var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/contarRespostas", function (req, res) {
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

router.get("/respostasPorIdade", function (req, res) {
    dashboardController.buscarRespostasPorIdade(req, res);
});

module.exports = router;