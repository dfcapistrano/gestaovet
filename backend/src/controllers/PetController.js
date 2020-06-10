// Regras de negócio da entidade Pet

const connection = require('../database/connection'); // Importa a conexão com o banco de dados
const crypto = require('crypto'); // Biblioteca de criptografia

module.exports = {

    // Listar
    async index(request, response) {
        const pets = await connection('pet').select('*'); // Seleciona tudo da tabela de pet
        
        return response.json(pets); // Retorna todos os pets cadastrados
    },

    // Criar
    async create(request, response) {
        const { nome, raca, sexo, especie, peso, idade} = request.body; // Pega as informação 
        
        const id = crypto.randomBytes(4).toString('HEX'); // Cria um ID personalizado para cada pet 
        
        // Insere no banco de dados as informações
        await connection('pet').insert({
            id,
            nome,
            raca,
            sexo,
            especie,
            peso,
            idade
        });

        return response.json({ id, nome }); // Retorna o ID do Pet e o nome que foi inserido no banco
    }
};