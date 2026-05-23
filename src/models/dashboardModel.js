function contarRespostas() {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function contarRespostas():");
    
    // Comando SQL para contar quantas linhas existem na tabela de resultados
    var instrucaoSql = `
        SELECT count(id) as totalRespostas FROM resultado_quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    contarRespostas
};