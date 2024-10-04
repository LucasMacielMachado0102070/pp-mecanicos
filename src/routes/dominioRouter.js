const express = require('express');
const router = express.Router();
const { criarDominio,listarDominios,atualizarDominio,deletarDominio } = require('../controller/DominioController');

// Rota para criar um novo domínio
router.post('/dominios', criarDominio);

// Rota para listar todos os domínios
router.get('/dominios', listarDominios);

// Rota para atualizar um domínio específico
router.put('/dominios/:id', atualizarDominio);

// Rota para deletar um domínio específico
router.delete('/dominios/:id', deletarDominio);

module.exports = router;