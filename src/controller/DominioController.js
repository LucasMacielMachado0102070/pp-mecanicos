const connection = require("../config/db");

// Criar um novo domínio
async function criarDominio(request, response) {
    const { id_produto, link, nome_site } = request.body;
    const sql = "INSERT INTO dominios (id_produto, link, nome_site) VALUES (?, ?, ?)";

    connection.query(sql, [id_produto, link, nome_site], (err, result) => {
        if (err) {
            return response.status(500).json({ success: false, message: "Erro ao criar domínio", error: err });
        }
        response.status(201).json({ success: true, id: result.insertId, id_produto, link, nome_site });
    });
}

// Listar todos os domínios
async function listarDominios(request, response) {
    const sql = "SELECT * FROM dominios";

    connection.query(sql, (err, results) => {
        if (err) {
            return response.status(500).json({ success: false, message: "Erro ao listar domínios", error: err });
        }
        response.status(200).json({ success: true, data: results });
    });
}

// Atualizar um domínio
async function atualizarDominio(request, response) {
    const { id } = request.params;
    const { id_produto, link, nome_site } = request.body;
    const sql = "UPDATE dominios SET id_produto = ?, link = ?, nome_site = ? WHERE id = ?";

    connection.query(sql, [id_produto, link, nome_site, id], (err, result) => {
        if (err) {
            return response.status(500).json({ success: false, message: "Erro ao atualizar domínio", error: err });
        }
        response.status(200).json({ success: true, message: "Domínio atualizado com sucesso" });
    });
}

// Deletar um domínio
async function deletarDominio(request, response) {
    const { id } = request.params;
    const sql = "DELETE FROM dominios WHERE id = ?";

    connection.query(sql, [id], (err, result) => {
        if (err) {
            return response.status(500).json({ success: false, message: "Erro ao deletar domínio", error: err });
        }
        response.status(200).json({ success: true, message: "Domínio deletado com sucesso" });
    });
}

module.exports = {
    criarDominio,
    listarDominios,
    atualizarDominio,
    deletarDominio
};