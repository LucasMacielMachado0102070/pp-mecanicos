document.addEventListener('DOMContentLoaded', function(){
    const urlParams = new URLSearchParams(window.location.search);

    const produtosId = urlParams.get("id")

    if(produtosId) {
        fetch(`http://localhost:3004/api/get/produtos/detalhes/${produtosId}`)
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                const detalhesMain = document.getElementById("detalhes")
                detalhesMain.innerHTML = 
                `
                <card class="card" class="card img">
                    <h2 >${data.data.nome}</h2>
                    <img id="produto" src="http://localhost:3004/uploads/${data.data.imagem}">
                    <p>valor: ${data.data.valor}</p>
                </card>

                <section>
                <div>Mecanica:</div>
                <div>Mecanica:</div>
                </section>

                `
            } else {
                const detalhesMain = document.getElementById("detalhes")
                detalhesMain.innerHTML = `Não há produto!`
            }
        })

    }

})