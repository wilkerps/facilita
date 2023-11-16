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

  logout(req, res) {
    try {
      // Lógica para fazer logout, por exemplo, remover o token do local storage
      localStorage.removeItem('token');
      res.status(200).json({ message: 'Logout realizado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = authController;
