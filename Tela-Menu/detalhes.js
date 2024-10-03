const images = "http://localhost:3004/uploads/";

document.addEventListener('DOMContentLoaded', function(){
    let produtos = localStorage.getItem("produto_comparacao");
    console.log(JSON.parse(produtos));

    let detalhesMain = document.getElementById('detalhes');

    let content = JSON.parse(produtos)

    content.forEach(produto => {
        console.log(produto)
        detalhesMain.innerHTML += `
              <card class="card" class="card img">
                  <h2>${produto.nome}</h2>
                  <img id="produto" src="http://localhost:3004/uploads/${produto.imagem}">
                  <p>valor: ${produto.valor}</p>
                  <a href="${produto.link}" target="_blank">Acessar</a>
              </card>`
    });

    // const urlParams = new URLSearchParams(window.location.search);

    // const produtosId = urlParams.get("id")

    // if(produtosId) {
    //     fetch(`http://localhost:3004/api/get/produtos/detalhes/${produtosId}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         if(data.success) {
    //             const detalhesMain = document.getElementById("detalhes")
    //             detalhesMain.innerHTML = 
    //             `
    //             <card class="card" class="card img">
    //                 <h2 >${data.data.nome}</h2>
    //                 <img id="produto" src="http://localhost:3004/uploads/${data.data.imagem}">
    //                 <p>valor: ${data.data.valor}</p>
    //             </card>

    //             <section>
    //             <div>Mecanica:</div>
    //             <div>Mecanica:</div>
    //             </section>

    //             `
    //         } else {
    //             const detalhesMain = document.getElementById("detalhes")
    //             detalhesMain.innerHTML = `Não há produto!`
    //         }
    //     })

    // }

})