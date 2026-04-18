const express = require('express');
const router = express.Router();
const ListagemController = require('../controllers/listagemController');

router.get('/', listagemController.listEntries);
router.get('/:id', listagemController.getEntryById);
router.get('/:titulo', listagemController.getEntryByName);
router.post('/', listagemController.createEntry);
router.put('/:id', listagemController.updateEntry);
router.delete('/:id', listagemController.deleteEntry);

module.exports = router;
