const connection = require("../config/db");
 
async function login(request, response) {    

  const nome = request.body.nome;
  const query = "SELECT nome, senha FROM nomes WHERE nome = ?";
 
  connection.query(query, nome, (err, results) => {    
    if(results && results.length) {
        console.log(results);
      const password = request.body.senha;
      const passwordQuery = results[0].senha;
 
      if (password === passwordQuery) {
        response
          .status(200)
          .json({
            success: true,
            message: "Sucesso!",
            data: results
          })
      } else {
        response
          .status(400)
          .json({
            success: false,
            message: "Sem Sucesso!",
            data: err
          })
      }
    } else {
        response
         .status(400)
         .json({
            success: false,
            message: "Sem Sucesso!",
            data: "Usuário não encontrado"
          })
    }
  })
 
}
 
module.exports = {
  login
}