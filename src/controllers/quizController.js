// src/controllers/quizController.js
var quizModel = require("../models/quizModel");

function listarPerguntas(req, res) {
    quizModel.listarPerguntas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                // Lógica para agrupar as opções dentro das perguntas
                let perguntasAgrupadas = [];
                let perguntaAtual = null;

                resultado.forEach(linha => {
                    if (!perguntaAtual || perguntaAtual.idPergunta !== linha.idPergunta) {
                        if (perguntaAtual) perguntasAgrupadas.push(perguntaAtual);
                        perguntaAtual = {
                            idPergunta: linha.idPergunta,
                            texto: linha.texto_pergunta,
                            opcoes: []
                        };
                    }
                    perguntaAtual.opcoes.push({
                        idOpcao: linha.idOpcao,
                        texto: linha.texto_opcao,
                        perfil: linha.perfil_relacionado
                    });
                });
                if (perguntaAtual) perguntasAgrupadas.push(perguntaAtual); // push da última pergunta

                res.status(200).json(perguntasAgrupadas);
            } else {
                res.status(204).send("Nenhuma pergunta encontrada!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function salvarResultado(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var resultadoFinal = req.body.resultadoFinalServer;
    var faixaEtaria = req.body.faixaEtariaServer;

    if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    } else if (resultadoFinal == undefined) {
        res.status(400).send("Seu resultadoFinal está undefined!");
    } else {
        quizModel.salvarResultado(idUsuario, resultadoFinal, faixaEtaria)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    listarPerguntas,
    salvarResultado
};