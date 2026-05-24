var dashboardModel = require("../models/dashboardModel");

function contarRespostas(req, res) {
    dashboardModel.contarRespostas().then(function (resultado) {
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

function resultadoPredominante(req, res) {
    dashboardModel.resultadoPredominante().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado[0]); 
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o resultado predominante: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    contarRespostas,
    resultadoPredominante
};