async function cadastrar(event) {
    event.preventDefault();

    let formData = new FormData();

    formData.append('nome', document.getElementById('nome').value);
    formData.append('valor', document.getElementById('valor').value);
    formData.append('file', document.getElementById('file').files[0]);

    const response = await fetch('http://localhost:3004/api/produto/salvar', {
        method: 'POST',
        body: formData
    });

    const results = await response.json();

    if (results.success) {
        listarProdutos();
        alert('Produto cadastrado com sucesso!');
    } else {
        alert('Ocorreu um erro ao cadastrar o produto.');
    }
}

async function listarProdutos() {  
    const images = 'http://localhost:3004/uploads/';
    const results = await fetch('http://localhost:3004/api/produtos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const produtos = await results.json();
    
    if (produtos.success) {
        let produtosList = produtos.data;
        
        let cards = document.getElementById('cards');

        produtosList.forEach(produto => {
            // let html = "<div class='card'>" +
            //     produto.nome +
            //     "<img src=" + images + produto.imagem + " alt='Tensor de Carreia Dentada' > " +
            //     "</div>"


            // cards.innerHTML += html;

            let card = document.createElement('div');
            card.className = 'card';
               
            card.innerHTML = `<h3>${produto.nome}</h3>
            <img src="${images}${produto.imagem}" alt="Tensor de Carreia Dentada">`;

            card.addEventListener('click', function() {
                window.location.href = `detalhes.html?id=${produto  .id}` 
            })

            cards.appendChild(card);
        });

        
    }
}
listarProdutos();

// Obtenha o modal
var modal = document.getElementById("myModal");

// Obtenha o botão que abre o modal
var btn = document.getElementById("myBtn");

// Obtenha o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}