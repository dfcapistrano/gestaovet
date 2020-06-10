// Arquivo com todas as rotas da aplicação

const express = require('express');
const ClienteController = require('./controllers/ClienteController'); // Cliente Controller
const FuncionarioController = require('./controllers/FuncionarioController'); // Funcionário Controller
const PetController = require('./controllers/PetController'); // Pet Controller
const routes = express.Router();

routes.get('/cliente', ClienteController.index); // List Cliente
routes.post('/cliente', ClienteController.create); // Create Cliente

routes.get('/funcionario', FuncionarioController.index); // List Funcionario
routes.post('/funcionario', FuncionarioController.create); // Create Funcionario

routes.get('/pet', PetController.index); // List Pet
routes.post('/pet', PetController.create); // Create Pet

module.exports = routes;