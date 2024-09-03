let button = document.getElementById("handleSubmit");

button.onclick = async function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    let data = {nome,senha}

    const response = await fetch('http://localhost:3004/api/login', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if (content.success) {
        alert('Sucesso');
        window.location.href = '../Tela-Menu/menu.html';
    } else {
        alert('Não');
    }
}