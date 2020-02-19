const express = require('express');
const router = express.Router();

const bancoDeDados = require('./dataBase');

router.get('/', (request, response) => {

    bancoDeDados.conexao.query(`SELECT * FROM digidb_digimonlist`, (erro, resultado) => {
        if (!erro) {
            response.status(200).json(resultado);
        }
        else {
            response.status(400).json({ erro: erro });
        }
    }); 
});

router.post('/', (request, response) => {
    let nome = request.body.nome;
    let email = request.body.email;
    let senha = request.body.senha;
    
    bancoDeDados.conexao.query(`insert into Users (nome, email, senha) values ('${nome}', '${email}', '${senha}')`, (erro, resposta) => {
        if (!erro)
            response.status(200).json({ Resposta: resposta });
        else
            response.status(400).json({ Erro: erro }).send();
    });
});

router.delete('/:id', (request, response) => {
    let id = request.params.id;

    bancoDeDados.conexao.query(`delete from Users where '${id}' = id`, (erro, resultado) => {
        if (!erro) {
            response.status(200).json(resultado);
        }
        else {
            response.status(400).json({ erro: erro });
        }
    });
});

module.exports = (api) => api.use('/api/digidex', router);