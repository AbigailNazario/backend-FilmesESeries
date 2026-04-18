const MidiaEntry = require('../models/midiaEntry');

exports.listEntries = async (req, res) => {
  const entries = await MidiaEntry.find();
  res.json(entries);
};

exports.getEntryById = async (req, res) => {
  const entry = await MidiaEntry.findById(req.params.id);
  if (!entry) return res.status(404).json({ message: 'Registro não encontrado.' });
  res.json(entry);
};

exports.getEntryByName = async (req, res) => {
  const { titulo } = req.params;

  const entry = await MidiaEntry.findOne({ titulo });

  if (!entry) {
    return res.status(404).json({ message: 'Registro não encontrado.' });
  }

  res.json(entry);
};

exports.createEntry = async (req, res) => {
  const entry = await MidiaEntry.create(req.body);
  res.status(201).json(entry);
};

exports.updateEntry = async (req, res) => {
  const entry = await MidiaEntry.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!entry) return res.status(404).json({ message: 'Registro não encontrado.' });

  res.json(entry);
};

exports.deleteEntry = async (req, res) => {
  const entry = await MidiaEntry.findByIdAndDelete(req.params.id);
  if (!entry) return res.status(404).json({ message: 'Registro não encontrado.' });
  res.json({ message: 'Registro removido com sucesso.' });
};