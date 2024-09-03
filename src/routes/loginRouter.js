// Importar o modulo de Router do express
const express = require('express');
// Instanciar o Router na variável router
const router = express.Router();
// Importar as funções (processamento da requisição) do controller
const { login } = require('../controller/loginController');

router.post('/login', login);

module.exports = router;