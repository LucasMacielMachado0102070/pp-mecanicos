const express = require('express');
const router = express.Router();
const { criarDominio,getDominiosById,atualizarDominio,deletarDominio } = require('../controller/DominioController');

/**
* @swagger
* /dominios:
*   post:
*     summary: Cria um Dominio
*     responses:
*        200:
*           description: Listando os domínios
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/

// Rota para criar um novo domínio
router.post('/dominios', criarDominio);

/**
* @swagger
* /dominios:
*   get:
*     summary: Cria um Dominio
*     responses:
*        200:
*           description: Listando os domínios
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/

// Rota para listar todos os domínios
router.get('/dominios/:id', getDominiosById);



/**
* @swagger
* /dominios:
*   put:
*     summary: Cria um Dominio
*     responses:
*        200:
*           description: Listando os domínios
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/

// Rota para atualizar um domínio específico
router.put('/dominios/:id', atualizarDominio);

/**
* @swagger
* /dominios:
*   delete:
*     summary: Cria um Dominio
*     responses:
*        200:
*           description: Listando os domínios
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/

// Rota para deletar um domínio específico
router.delete('/dominios/:id', deletarDominio);

module.exports = router;