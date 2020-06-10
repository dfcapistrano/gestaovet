// Regras de negócio Login Cliente

const connection = require('../database/connection'); // Importa a conexão com o banco de dados

module.exports = {
    async create(request, response) {
        const { email, senha } = request.body;

        const cliente = await connection('cliente')
            .where('email', email)
            .andWhere('senha', senha)
            .select('nome', 'status')
            .first();

        if (!cliente) {
            return response.status(400).json({ error: 'Email ou Senha inválido.' });
        }

        return response.json(cliente);
    }
}