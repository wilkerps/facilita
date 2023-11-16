const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");

const authController = {
  async login(req, res) {
    try {
      const { email, senha } = req.body;

      const usuario = await Usuario.findOne({ email });

      if (!usuario) {
        return res.status(401).json({ message: "Usuário inválido" });
      }

      const senhaValida = await bcrypt.compare(senha, usuario.senha);

      if (!senhaValida) {
        return res.status(401).json({ message: "Senha inválida" });
      }

      const token = jwt.sign({ id: usuario._id }, "seu_segredo");

      res.status(200).json({ token, nome: usuario.nome });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async forgotPassword(req, res) {
    try {
      const { email } = req.body;

      // Verificar se o usuário existe no banco de dados
      const usuario = await Usuario.findOne({ email });

      if (!usuario) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      // Lógica para enviar um e-mail com instruções para redefinição de senha
      // (pode incluir um link para a página de redefinição de senha)

      res
        .status(200)
        .json({ message: "Instruções de recuperação enviadas por e-mail" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async resetPassword(req, res) {
    try {
      const { email, cpf } = req.body;

      // Verifique se o usuário existe com base no email e CPF fornecidos
      const usuario = await Usuario.findOne({ email, cpf });

      if (!usuario) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      // Lógica para redefinir a senha - por exemplo:
      // usuario.senha = novaSenha; // Atribuir nova senha ao usuário
      // await usuario.save(); // Salvar a senha no banco de dados

      res
        .status(200)
        .json({
          message: "Solicitação de redefinição de senha enviada com sucesso",
        });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  logout(req, res) {
    try {
      // Lógica para fazer logout, por exemplo, remover o token do local storage
      localStorage.removeItem("token");
      res.status(200).json({ message: "Logout realizado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = authController;
