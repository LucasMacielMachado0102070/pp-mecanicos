const images = "http://localhost:3004/uploads/";

document.addEventListener("DOMContentLoaded", function () {
	let produtos = localStorage.getItem("produto_comparacao");
	console.log(JSON.parse(produtos));

	let detalhesMain = document.getElementById("detalhes");

	let content = JSON.parse(produtos);

	content.forEach((produto) => {
		console.log(produto);
		localStorage.setItem("produtoId", produto.id);
		detalhesMain.innerHTML += `
              <card class="card" class="card img">
                  <h2>${produto.nome}</h2>
                  <img id="produto" src="http://localhost:3004/uploads/${produto.imagem}">
                  <p>valor: ${produto.valor}</p>
              </card>`;
	});

	const produtoId = localStorage.getItem("produtoId");
	console.log(produtoId);
	if (produtoId) {
		fetch(`http://localhost:3004/api/dominios/${produtoId}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					console.log("Deu certo");
					console.log(data);
					const linksSection = document.querySelector('.links');

					data.data.forEach((link) => {
						linksSection.innerHTML += `<a href="${link.link}" id="Fastcar">${link.nome_site}</a>`;
					});
				} else {
					console.log("Deu errado");
					// const detalhesMain = document.getElementById("detalhes")
					// detalhesMain.innerHTML = `Não há produto!`
				}
			});
	}
});
