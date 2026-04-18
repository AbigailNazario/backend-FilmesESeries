const mongoose = require('mongoose');

const midiaEntrySchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true, trim: true },
    type:{type: String, enum:['Filme','Serie'], trim: true},
    gender: { type: String, required: true, trim: true },
    status: { type: String, enum: ["assistido", "nao_assistido"],
    default: "nao_assistido" }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('MidiaEntry', midiaEntrySchema);