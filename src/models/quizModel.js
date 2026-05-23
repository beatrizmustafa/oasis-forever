var database = require("../database/config");

function listarPerguntas() {
    var instrucao = `
        SELECT 
            p.id AS idPergunta, 
            p.texto_pergunta, 
            o.id AS idOpcao, 
            o.texto_opcao, 
            o.perfil_relacionado
        FROM pergunta p
        JOIN opcao o ON p.id = o.fk_pergunta;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function salvarResultado(idUsuario, resultadoFinal) {
    var instrucao = `
        INSERT INTO resultado_quiz (fk_usuario, perfil_final) 
        VALUES (${idUsuario}, '${resultadoFinal}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarPerguntas,
    salvarResultado
};