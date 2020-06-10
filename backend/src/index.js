// Arquivo principal da aplicação 

const express = require('express'); 
const routes = require('./routes'); // Importa as rotas

const app = express(); // Intancia a aplicação

app.use(express.json()); // Utiliza JSON
app.use(routes); // Utiliza as rotas

app.listen(3333); // Porta onde a aplicação irá rodar