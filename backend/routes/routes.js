const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const usuarioController = require('../controllers/usuarioController');
const eventoController = require('../controllers/eventoController');

// Rotas para login e logout

router.post('/login', authController.login);
router.post('/logout', authController.logout);


// Rotas para usuários
router.post('/usuarios', usuarioController.cadastrarUsuario);
router.get('/usuarios', usuarioController.listarUsuarios);
router.get('/usuarios/:id', usuarioController.obterUsuarioPorId);
router.put('/usuarios/:id', usuarioController.atualizarUsuario);
router.delete('/usuarios/:id', usuarioController.removerUsuario);

// Rotas para eventos
router.post('/eventos', eventoController.cadastrarEvento);
router.get('/eventos', eventoController.listarEventos);
router.get('/eventos/:id', eventoController.obterEventoPorId);
router.put('/eventos/:id', eventoController.atualizarEvento);
router.delete('/eventos/:id', eventoController.removerEvento);

module.exports = router;