const router = require('express').Router();
const upload = require('../config/multer');

const { salvarProduto, produtos, getProdutosById } = require('../controller/ProdutosController');

router.post('/produto/salvar', upload.single('file'), salvarProduto);
router.get('/produtos', produtos);

router.get('/produtos/detalhes/:id', getProdutosById);

module.exports = router;