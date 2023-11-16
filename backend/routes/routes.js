const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const eventoController = require('../controllers/eventoController');

// Rotas para usuários
router.post('/usuarios', usuarioController.cadastrarUsuario); // Criar um novo usuário
router.get('/usuarios', /* Middleware de autenticação, se necessário */ usuarioController.listarUsuarios); // Listar todos os usuários
router.get('/usuarios/:id', /* Middleware de autenticação, se necessário */ usuarioController.obterUsuarioPorId); // Obter usuário por ID
router.put('/usuarios/:id', /* Middleware de autenticação, se necessário */ usuarioController.atualizarUsuario); // Atualizar usuário por ID
router.delete('/usuarios/:id', /* Middleware de autenticação, se necessário */ usuarioController.removerUsuario); // Remover usuário por ID

// Rotas para eventos
router.post('/eventos', eventoController.cadastrarEvento); // Criar um novo evento
router.get('/eventos', /* Middleware de autenticação, se necessário */ eventoController.listarEventos); // Listar todos os eventos
router.get('/eventos/:id', /* Middleware de autenticação, se necessário */ eventoController.obterEventoPorId); // Obter evento por ID
router.put('/eventos/:id', /* Middleware de autenticação, se necessário */ eventoController.atualizarEvento); // Atualizar evento por ID
router.delete('/eventos/:id', /* Middleware de autenticação, se necessário */ eventoController.removerEvento); // Remover evento por ID

module.exports = router;