const images = "http://localhost:3004/uploads/";

document.addEventListener('DOMContentLoaded', function(){
    let produtos = localStorage.getItem("produto_comparacao");
    console.log(JSON.parse(produtos));

    let detalhesMain = document.getElementById('detalhes');

    let content = JSON.parse(produtos)

    content.forEach(produto => {
        console.log(produto)
        localStorage.setItem("produtoId",produto.id);
        detalhesMain.innerHTML += `
              <card class="card" class="card img">
                  <h2>${produto.nome}</h2>
                  <img id="produto" src="http://localhost:3004/uploads/${produto.imagem}">
                  <p>valor: ${produto.valor}</p>
              </card>`
    });

    //Estamos implementando a listagem dos dominios(links de venda da internet), porém não deu tempo.
    //Precisa pegar por parametro o id do dominio, não do produto, o id do produto será usado para buscar no bd os dominios de um produto especifico
    const produtoId = localStorage.getItem('produtoId');
    console.log(produtoId);
    if(produtoId) {
        fetch(`http://localhost:3004/api/dominios/${produtoId}`)
        .then(response => response.json())
        .then(data => {
            if(data.success) {
              console.log("Deu certo")
              console.log(data)
                const linksSection = document.getElementById("links")
                
                data.data.forEach(link => {
                  linksSection.innerHTML = 
                  `
                  <a href="${link.link}" class="Fastcar">${link.nome_site}</a>
                  `
                });
                
                
            } else {
              console.log("Deu errado")
                // const detalhesMain = document.getElementById("detalhes")
                // detalhesMain.innerHTML = `Não há produto!`
            }
        })

    }

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
async function cadastrar(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const id_produto = document.getElementById("id_produto").value;
  const link = document.getElementById("link").value;

  if (nome && id_produto && link) {

    // let data = {nome, id_produto, link}
    // console.log(data)

    // const response = await fetch('http://localhost:3004/api/dominios', {
    //     method: "POST",
    //     headers: {"Content-type": "application/json;charset=UTF-8"},
    //     body: JSON.stringify(data)
    // });

    // let content = await response.json();

    // if (content.success) {
    //     alert('Sucesso');
    // } else {
    //     alert('Não');
    // }

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
