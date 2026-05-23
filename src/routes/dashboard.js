router.get("/contarRespostas", function (req, res) {
    quizController.contarRespostas(req, res);
});

module.exports = router;