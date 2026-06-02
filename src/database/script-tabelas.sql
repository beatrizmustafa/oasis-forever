CREATE DATABASE oasisforever;

USE oasisforever;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	username VARCHAR(15),
	email VARCHAR(50),
	cpf CHAR(11),
	senha VARCHAR(50)
);

CREATE TABLE pergunta (
    id INT PRIMARY KEY AUTO_INCREMENT,
    texto_pergunta TEXT NOT NULL
);

CREATE TABLE opcao (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_pergunta INT NOT NULL,
    texto_opcao TEXT NOT NULL,
    perfil_relacionado VARCHAR(20) NOT NULL, 
    FOREIGN KEY (fk_pergunta) REFERENCES pergunta(id)
);

CREATE TABLE resultado_quiz (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT NOT NULL,
    perfil_final VARCHAR(20) NOT NULL, -- Vai salvar 'Liam' ou 'Noel'
    data_realizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);


-- Pergunta 1
INSERT INTO pergunta (texto_pergunta) VALUES ('Como você se comporta em um trabalho em equipe?');
INSERT INTO opcao (fk_pergunta, texto_opcao, perfil_relacionado) VALUES 
(1, 'Eu sou o rosto do projeto. Faço a apresentação e conquisto a todos com minha confiança.', 'Liam'),
(1, 'Eu faço a maior parte do trabalho real, organizo tudo e ainda me irrito com a falta de eficiência dos outros.', 'Noel'),
(1, 'Faço apenas a minha parte e fico na minha.', 'Neutro'),
(1, 'Fico responsável por organizar os intervalos e manter o clima agradável.', 'Neutro');

-- Pergunta 2
INSERT INTO pergunta (texto_pergunta) VALUES ('O garçom traz o seu pedido errado no restaurante. O que você faz?');
INSERT INTO opcao (fk_pergunta, texto_opcao, perfil_relacionado) VALUES 
(2, 'Reclamo na mesma hora, falo alto e exijo que troquem imediatamente.', 'Liam'),
(2, 'Faço um comentário tão sarcástico que o garçom fica sem saber se foi uma piada ou uma ofensa.', 'Noel'),
(2, 'Como o que veio mesmo, para evitar qualquer tipo de conflito.', 'Neutro'),
(2, 'Chamo o garçom com educação e peço para trocar.', 'Neutro');

-- Pergunta 3
INSERT INTO pergunta (texto_pergunta) VALUES ('Uma discussão começa no grupo de mensagens da família. Qual é o seu papel?');
INSERT INTO opcao (fk_pergunta, texto_opcao, perfil_relacionado) VALUES 
(3, 'Mando áudio alterado, discuto com quem discorda de mim e saio do grupo.', 'Liam'),
(3, 'Escrevo um texto perfeitamente pontuado, desmonto o argumento do outro com fatos lógicos e silencio as notificações.', 'Noel'),
(3, 'Envio imagens neutras tentando mudar de assunto.', 'Neutro'),
(3, 'Apenas leio as mensagens e observo a confusão de longe.', 'Neutro');

-- Pergunta 4
INSERT INTO pergunta (texto_pergunta) VALUES ('Como é o seu estilo para sair à noite?');
INSERT INTO opcao (fk_pergunta, texto_opcao, perfil_relacionado) VALUES 
(4, 'Coloco minha jaqueta favorita, óculos escuros e chamando atenção.', 'Liam'),
(4, 'Roupas elegantes, de boa qualidade e sem exageros.', 'Noel'),
(4, 'Calça jeans e a primeira camiseta que eu encontrar no armário.', 'Neutro'),
(4, 'Roupas muito confortáveis, priorizando o bem-estar acima da estética.', 'Neutro');

-- Pergunta 5
INSERT INTO pergunta (texto_pergunta) VALUES ('Alguém te faz uma crítica construtiva que você não pediu. Como você reage?');
INSERT INTO opcao (fk_pergunta, texto_opcao, perfil_relacionado) VALUES 
(5, 'Levo para o lado pessoal na hora, me sinto ofendido e ataco de volta.', 'Liam'),
(5, 'Dou um sorriso irônico, concordo por educação, mas no fundo tenho certeza de que a pessoa não sabe do que está falando.', 'Noel'),
(5, 'Agradeço e tento realmente refletir sobre aquilo para melhorar.', 'Neutro'),
(5, 'Fico chateado, mas guardo a frustração para mim.', 'Neutro');

-- Pergunta 6
INSERT INTO pergunta (texto_pergunta) VALUES ('Como é o seu comportamento nas redes sociais?');
INSERT INTO opcao (fk_pergunta, texto_opcao, perfil_relacionado) VALUES 
(6, 'Escrevo em letras maiúsculas, reclamo do meu dia e dou respostas a quem me contrariar.', 'Liam'),
(6, 'Faço comentários sobre as notícias e posto coisas mostrando como minha vida é interessante.', 'Noel'),
(6, 'Só uso para ver vídeos engraçados e acompanhar a vida dos amigos.', 'Neutro'),
(6, 'Quase não uso, prefiro viver o momento fora da internet.', 'Neutro');

-- Pergunta 7
INSERT INTO pergunta (texto_pergunta) VALUES ('Qual é a sua postura em um evento social?');
INSERT INTO opcao (fk_pergunta, texto_opcao, perfil_relacionado) VALUES 
(7, 'Sou o centro das atenções, falo alto, domino o ambiente e sou o último a ir embora.', 'Liam'),
(7, 'Fico sentado em um lugar estratégico com meu grupo, observando e julgando as pessoas ao meu redor.', 'Noel'),
(7, 'Fico a maior parte do tempo perto da mesa de comida e bebida.', 'Neutro'),
(7, 'Faço uma visita rápida apenas por educação e volto logo para casa.', 'Neutro');

-- Pergunta 8
INSERT INTO pergunta (texto_pergunta) VALUES ('Você teve uma briga séria com um amigo próximo. Como a situação se resolve?');
INSERT INTO opcao (fk_pergunta, texto_opcao, perfil_relacionado) VALUES 
(8, 'Ficamos meses sem nos falar por puro orgulho, até um de nós perder a paciência e mandar mensagem.', 'Liam'),
(8, 'Eu não procuro a pessoa. Ela sabe onde me encontrar quando quiser admitir que errou.', 'Noel'),
(8, 'Chamo para conversar no dia seguinte, pois detesto manter conflitos.', 'Neutro'),
(8, 'Finjo que nada aconteceu e volto a conversar normalmente depois de uns dias.', 'Neutro');

-- Pergunta 9
INSERT INTO pergunta (texto_pergunta) VALUES ('Como você lida com imprevistos irritantes?');
INSERT INTO opcao (fk_pergunta, texto_opcao, perfil_relacionado) VALUES 
(9, 'Esbravejo, culpo o universo e faço um drama enorme sobre a situação.', 'Liam'),
(9, 'Suspiro fundo, reviro os olhos para a minha má sorte e começo a pensar na solução mais lógica.', 'Noel'),
(9, 'Fico muito ansioso e tenho dificuldade de pensar em como resolver na hora.', 'Neutro'),
(9, 'Dou risada da situação e tento ver o lado positivo.', 'Neutro');

-- Pergunta 10
INSERT INTO pergunta (texto_pergunta) VALUES ('No fundo, qual é o seu maior objetivo pessoal?');
INSERT INTO opcao (fk_pergunta, texto_opcao, perfil_relacionado) VALUES 
(10, 'Viver intensamente, ser notado onde quer que eu vá e nunca abaixar a cabeça para ninguém.', 'Liam'),
(10, 'Fazer as coisas do meu jeito, ser reconhecido como o melhor no que faço e ter controle total sobre a minha vida.', 'Noel'),
(10, 'Ter estabilidade, conforto e muita paz de espírito.', 'Neutro'),
(10, 'Ter liberdade financeira para viajar e não ter grandes preocupações na rotina.', 'Neutro');


ALTER TABLE resultado_quiz ADD COLUMN faixa_etaria VARCHAR(20);

SELECT id, nome, username, email FROM usuario;

        SELECT 
            p.id AS idPergunta, 
            p.texto_pergunta, 
            o.id AS idOpcao, 
            o.texto_opcao, 
            o.perfil_relacionado
        FROM pergunta p
        JOIN opcao o ON p.id = o.fk_pergunta;
        
SELECT count(id) as totalRespostas FROM resultado_quiz;

 SELECT perfil_final, COUNT(perfil_final) as quantidade
        FROM resultado_quiz
        GROUP BY perfil_final
        ORDER BY quantidade DESC
        LIMIT 1;
        
 SELECT perfil_final, COUNT(perfil_final) as quantidade
        FROM resultado_quiz
        GROUP BY perfil_final;
        
 SELECT 
            perfil_final,
            WEEKDAY(data_realizacao) as dia_semana,
            COUNT(id) as quantidade
        FROM resultado_quiz
        GROUP BY perfil_final, dia_semana;
        
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
        
 SELECT faixa_etaria, COUNT(id) as quantidade
        FROM resultado_quiz
        GROUP BY faixa_etaria;
        
