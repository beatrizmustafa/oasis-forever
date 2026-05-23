function contarRespostas(req, res) {
    quizModel.contarRespostas().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado[0]); // Retorna o primeiro resultado (o count)
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o total de respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    // ... suas outras funções,
    contarRespostas
};