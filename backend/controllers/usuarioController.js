const Usuario = require('../models/Usuario');

// Função para cadastrar um novo usuário
const cadastrarUsuario = async (req, res) => {
  try {
    const novoUsuario = await Usuario.create(req.body);
    res.status(201).json({ usuario: novoUsuario });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Função para listar todos os usuários
const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json({ usuarios });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Função para obter um usuário por ID
const obterUsuarioPorId = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json({ usuario });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Função para atualizar um usuário por ID
const atualizarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json({ usuario });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Função para remover um usuário por ID
const removerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json({ message: 'Usuário removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  cadastrarUsuario,
  listarUsuarios,
  obterUsuarioPorId,
  atualizarUsuario,
  removerUsuario,
};