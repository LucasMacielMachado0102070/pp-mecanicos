document.addEventListener('DOMContentLoaded', function(){
    const produtoId = localStorage.getItem('produtoId');
    console.log(produtoId);

    if(produtoId) {
        fetch(`http://localhost:3004/api/produtos/detalhes/${produtoId}`)
        .then(response => response.json())
        .then(data => {
            if(data.success) {
              console.log("Deu certo")
              console.log(data)
                const detalhesSection = document.getElementById("detalhes")
                
                data.data.forEach(detalhes => {
                    detalhesSection.innerHTML = 
                  `
                  <h2>${detalhes.nome}</h2>
                <p class="p-Info-peça">
                    <img id="Oleo-img" src="../src/public/${detalhes.imagem}" alt="${detalhes.especificacao}" />
                    <a href="#">${detalhes.especificacao}</a>
                  </p>
                  

				<div id="peca-detalhes">
					<h3>${detalhes.nome}</h3>
					<p class="p2-descriçao_peça">
                    ${detalhes.descricao}
					</p>
				</div>
                  `
                });
                
                
            } else {
              console.log("Deu errado")
                // const detalhesMain = document.getElementById("detalhes")
                // detalhesMain.innerHTML = `Não há produto!`
            }
        })

    }

});