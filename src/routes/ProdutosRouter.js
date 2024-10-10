const router = require('express').Router();
const upload = require('../config/multer');

const { salvarProduto, produtos, getProdutosById } = require('../controller/ProdutosController');

/**
* @swagger
* /produtos/salvar:
*   post:
*     summary: Cria um Produto
*     responses:
*        200:
*           description: Cria dados de um Produto
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/

router.post('/produto/salvar', upload.single('file'), salvarProduto);

/**
* @swagger
* /produtos:
*   get:
*     summary: Consulta dos Produtos
*     responses:
*        200:
*           description: Cunsulta todos os dados dos Produtos
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/

router.get('/produtos', produtos);

/**
* @swagger
* /produtos/detalhes:
*   get:
*     summary: Consulta dos id dos Produtos
*     responses:
*        200:
*           description: Consulta os id
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/

router.get('/produtos/detalhes/:id', getProdutosById);

module.exports = router;