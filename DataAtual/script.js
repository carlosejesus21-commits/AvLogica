document.getElementById("mostrarData").addEventListener("click", mostrarDataAtual);

function mostrarDataAtual() {
    const dataAtual = new Date();
    alert("Data atual: " + dataAtual.toLocaleString('PT-BR'));
}

