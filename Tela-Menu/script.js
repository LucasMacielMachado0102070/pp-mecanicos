let produtosBanco;

async function cadastrar(event) {
  event.preventDefault();

  let formData = new FormData();

  formData.append("nome", document.getElementById("nome").value);
  formData.append("valor", document.getElementById("valor").value);
  formData.append("file", document.getElementById("file").files[0]);

  const response = await fetch("http://localhost:3004/api/produto/salvar", {
    method: "POST",
    body: formData,
  });

  const results = await response.json();

  if (results.success) {
    listarProdutos();
    alert("Produto cadastrado com sucesso!");
  } else {
    alert("Ocorreu um erro ao cadastrar o produto.");
  }
}

// async function listarProdutos() {
if (window.location.href === "http://127.0.0.1:5500/Tela-Menu/menu.html") {
  document.addEventListener("DOMContentLoaded", async function () {
    const images = "http://localhost:3004/uploads/";
    const results = await fetch("http://localhost:3004/api/produtos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const produtos = await results.json();

    if (produtos.success) {
      produtosBanco = produtos.data;
      let produtosList = produtos.data;
      //console.log(produtosList);
      let cards = document.getElementById("cards");

      produtosList.forEach((produto) => {
        //   let card = document.createElement("div");
        //   card.className = "card";
        console.log(produto)
        cards.innerHTML += `<div class="card" onclick="getComparacaoProdutos(${produto.id}) ">
                  <h3>${produto.nome}</h3>
                  <img src="${images}${produto.imagem}" alt="Tensor de Carreia Dentada">
                  </div>`;

        //   card.addEventListener("click", function () {
        //     getComparacaoProdutos(produto);
        //     //window.location.href = `detalhes.html`;// ?id=${produto.id}`;
        //   });

        //   cards.innerHTML = cards;
      });
    }
  });
}

// listarProdutos();

async function getComparacaoProdutos(produto) {
  const response = await fetch(
    `http://localhost:3004/api/produtos/detalhes/${produto}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const results = await response.json();

  if (results.success) {
    localStorage.setItem("produto_comparacao", JSON.stringify(results.data));
    window.location.href = `detalhes.html`;
  }
  //   let detalhesMain = document.getElementById("detalhes");
  //   console.log(detalhesMain);

  //   detalhesMain.innerHTML = "mensagem";
  // detalhesMain.innerHTML = `
  //             <card class="card" class="card img">
  //                 <h2 >${produto.nome}</h2>
  //                 <img id="produto" src="http://localhost:3004/uploads/${produto.imagem}">
  //                 <p>valor: ${produto.valor}</p>
  //             </card>

  //             <section>
  //             <div>Mecanica:</div>
  //             <div>Mecanica:</div>
  //             </section>

  //             `;
  // } else {
  //   const detalhesMain = document.getElementById("detalhes");
  //   detalhesMain.innerHTML = `Não há produto!`;
  // }
}



// Obtenha o modal
var modal = document.getElementById("myModal");

// Obtenha o botão que abre o modal
 var btn = document.getElementById("myBtn");

// Obtenha o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function () {
  modal.style.display = "none";
};

// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};