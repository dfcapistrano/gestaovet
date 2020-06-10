// Regras de negócio da entidade Funcionário

const connection = require('../database/connection'); // Importa a conexão com o banco de dados
const crypto = require('crypto'); // Biblioteca de criptografia

module.exports = {

    // Listar
    async index(request, response) {
        const funcionarios = await connection('funcionario').select('*'); // Seleciona tudo da tabela de Funcionario
        
        return response.json(funcionarios); // Retorna todos os funcionarios cadastrados
    },

    // Criar
    async create(request, response) {
        const { nome, sobrenome, email, telefone, cidade, estado, cargo, senha } = request.body; // Pega as informação 
        
        const id = crypto.randomBytes(4).toString('HEX'); // Cria um ID personalizado para cada funcionario 
        const status = 'ADMIN'; // Seta o status para USER para diferenciar o ambiente no sistema (Pode ser USER ou ADMIN)

        // Insere no banco de dados as informações
        await connection('funcionario').insert({
            id,
            senha,
            nome,
            sobrenome,
            email,
            telefone,
            cidade,
            estado,
            cargo,
            status,
        });

        return response.json({ id, status }); // Retorna o ID do usuário que foi inserido no banco
    }
};