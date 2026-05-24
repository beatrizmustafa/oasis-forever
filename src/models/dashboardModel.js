var database = require("../database/config");

function contarRespostas() {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function contarRespostas():");
    
    // Comando SQL para contar quantas linhas existem na tabela de resultados
    var instrucaoSql = `
        SELECT count(id) as totalRespostas FROM resultado_quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function resultadoPredominante() {
    var instrucaoSql = `
        SELECT perfil_final, COUNT(perfil_final) as quantidade
        FROM resultado_quiz
        GROUP BY perfil_final
        ORDER BY quantidade DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosQuestionario() {
    var instrucaoSql = `
        SELECT perfil_final, COUNT(perfil_final) as quantidade
        FROM resultado_quiz
        GROUP BY perfil_final;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRespostasPorDia() {
    var instrucaoSql = `
        SELECT 
            perfil_final,
            WEEKDAY(data_realizacao) as dia_semana,
            COUNT(id) as quantidade
        FROM resultado_quiz
        GROUP BY perfil_final, dia_semana;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRespostasPeriodo() {
    var instrucaoSql = `
        SELECT 
            perfil_final,
            CASE 
                WHEN HOUR(data_realizacao) >= 6 AND HOUR(data_realizacao) < 12 THEN 'Manha'
                WHEN HOUR(data_realizacao) >= 12 AND HOUR(data_realizacao) < 18 THEN 'Tarde'
                ELSE 'Noite'
            END as periodo,
            COUNT(id) as quantidade
        FROM resultado_quiz
        GROUP BY perfil_final, periodo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    contarRespostas,
    resultadoPredominante,
    buscarDadosQuestionario,
    buscarRespostasPorDia,
    buscarRespostasPeriodo
};