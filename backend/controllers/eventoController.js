const Evento = require('../models/Evento');

const eventoController = {
  cadastrarEvento: async (req, res) => {
    try {
      const novoEvento = await Evento.create(req.body);
      res.status(201).json({ evento: novoEvento });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  listarEventos: async (req, res) => {
    try {
      const eventos = await Evento.find();
      res.status(200).json({ eventos });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  obterEventoPorId: async (req, res) => {
    try {
      const evento = await Evento.findById(req.params.id);
      if (!evento) {
        return res.status(404).json({ message: 'Evento não encontrado' });
      }
      res.status(200).json({ evento });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  atualizarEvento: async (req, res) => {
    try {
      const evento = await Evento.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!evento) {
        return res.status(404).json({ message: 'Evento não encontrado' });
      }
      res.status(200).json({ evento });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  removerEvento: async (req, res) => {
    try {
      const evento = await Evento.findByIdAndDelete(req.params.id);
      if (!evento) {
        return res.status(404).json({ message: 'Evento não encontrado' });
      }
      res.status(200).json({ message: 'Evento removido com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = eventoController;