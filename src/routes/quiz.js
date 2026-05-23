// src/routes/quiz.js
var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/listar", function (req, res) {
    quizController.listarPerguntas(req, res);
});

router.post("/salvar", function (req, res) {
    quizController.salvarResultado(req, res);
});

module.exports = router;