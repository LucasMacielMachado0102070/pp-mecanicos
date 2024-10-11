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

// Abrir e fechar o modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Função de cadastro
function cadastrar(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const id_produto = document.getElementById("id_produto").value;
  const link = document.getElementById("link").value;

  if (nome && id_produto && link) {
    // Aqui você pode enviar os dados para o backend ou realizar a lógica de cadastro
    alert(`Produto cadastrado:\nNome: ${nome}\nID do Produto: ${id_produto}\nLink: ${link}`);
    
    // Limpar campos e fechar modal
    document.getElementById("nome").value = "";
    document.getElementById("id_produto").value = "";
    document.getElementById("link").value = "";
    modal.style.display = "none";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}
