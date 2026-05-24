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

function buscarDadosQuestionario(req, res) {
    dashboardModel.buscarDadosQuestionario().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado); 
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados do questionário: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarRespostasPorDia(req, res) {
    dashboardModel.buscarRespostasPorDia().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado); 
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados por dia: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarRespostasPeriodo(req, res) {
    dashboardModel.buscarRespostasPeriodo().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado); 
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados por período: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    contarRespostas,
    resultadoPredominante,
    buscarDadosQuestionario,
    buscarRespostasPorDia,
    buscarRespostasPeriodo

};