const connection = require('../config/db');

async function storeTask(request, response) {
    const params = Array(
        request.body.nome,
        request.body.senha
    );

    const query = "INSERT INTO Nomes(nome, senha) VALUES(?, ?)";
    
    connection.query(query, params, (err, results) => {
        if(results) {
            response
                .status(201)
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
                    message: "Ops, deu problema!",
                    query: err.sql,
                    sqlMassage: err.sqlMassage
            })
        }
    })

}

module.exports = {
    storeTask
} 