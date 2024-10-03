const connection = require("../config/db");
 
async function salvarProduto(request, response) {    
  let params = Array(
    request.body.nome,
    request.body.valor,
    request.file.filename.trim()
  )

  let query = "INSERT INTO produtos(nome,valor,imagem) VALUES(?,?,?)";

  connection.query(query, params, (err, results) => {
    console.log(err);
    if (results) {      
      response.status(201)
        .json({
          success: true,
          message: "Sucesso!",
          data: results
        });
    } else {
      response.status(400).send("Produto salvo com sucesso!");
    }
  }); 
}

async function produtos(request, response) {
  let query = "SELECT * FROM produtos";

  connection.query(query, (err, results) => {
    if (results) {      
      response.status(200)
       .json({
          success: true,
          message: "Sucesso!",
          data: results
        });
    } else {
      response.status(400).send("Nenhum produto encontrado!");
    }
  }); 
}
async function getProdutosById(request, response) {
  const params = Array(request.params.id);

  const query = "SELECT * FROM produtos where id = ?"

  connection.query(query, params, (err, results) => {

    if(results.length > 0) {
      response.status(200).json({
        success: true,
        data: results[0],
        message: "Sucesso!"
      })  
    } else {
      response.status(400).json({
        success: false,
        message: "Erro!",
        sql: err
      })
    }
  })
}
 
module.exports = {
  salvarProduto,
  produtos,
  getProdutosById
}