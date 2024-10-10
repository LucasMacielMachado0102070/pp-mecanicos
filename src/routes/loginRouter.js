// Importar o modulo de Router do express
const express = require('express');
// Instanciar o Router na variável router
const router = express.Router();
// Importar as funções (processamento da requisição) do controller
const { login } = require('../controller/loginController');

/**
* @swagger
* /login:
*   post:
*     summary: Fazendo um Login
*     responses:
*        200:
*           description: Faz consulta de um Usuário
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/

router.post('/login', login);

module.exports = router;