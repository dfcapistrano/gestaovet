// Regras de negócio da entidade Cliente

const connection = require('../database/connection'); // Importa a conexão com o banco de dados
const crypto = require('crypto'); // Biblioteca de criptografia

module.exports = {

    // Listar
    async index(request, response) {
        const clientes = await connection('cliente').select('*'); // Seleciona tudo da tabela de Cliente
        
        return response.json(clientes); // Retorna todos os clientes cadastrados
    },

    // Criar
    async create(request, response) {
        const { nome, sobrenome, email, telefone, cidade, estado, senha } = request.body; // Pega as informação 
        
        const id = crypto.randomBytes(4).toString('HEX'); // Cria um ID personalizado para cada cliente 
        const status = 'USER'; // Seta o status para USER para diferenciar o ambiente no sistema (Pode ser USER ou ADMIN)

        // Insere no banco de dados as informações
        await connection('cliente').insert({
            id,
            nome,
            sobrenome,
            email,
            telefone,
            cidade,
            estado,
            senha,
            status,
        });

        return response.json({ id, status }); // Retorna o ID do usuário que foi inserido no banco
    }
};