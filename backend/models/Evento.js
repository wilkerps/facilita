const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
  nomeEvento: {
    type: String,
    required: true,
  },
  realizador: {
    type: String,
    required: true,
  },
  detalhes: {
    type: String,
    required: true,
  },
});

const Evento = mongoose.model('Evento', eventoSchema);

module.exports = Evento;
