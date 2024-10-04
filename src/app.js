// Importar o pacote express (servidor)
const express = require('express');
// Importar o cors para lidar com requisições externas
const cors = require('cors');
// Importar as rotas para serem executadas na aplicação
const loginRouter = require('./routes/loginRouter');
const produtosRouter = require('./routes/ProdutosRouter');
const dominioRouter = require('./routes/dominioRouter');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
const dotenv = require('dotenv').config();

// Instanciar o express na variável app
const app = express();

// Habilitar o recebimento de requests em formato JSON
app.use(express.json());
// Habilitar o uso dos cors no servidor
app.use(cors())
// Habilitar as rotas na aplicação
app.use('/uploads', express.static(__dirname + '\\public'));
app.use('/api', loginRouter);
app.use('/api', produtosRouter);
app.use('/api', dominioRouter);
// Setar a porta do servidor, a parir do arquivo .env
app.set('port', process.env.PORT || 3333);

module.exports = app;