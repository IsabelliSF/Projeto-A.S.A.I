function mostrarMensagem(evento) {
    evento.preventDefault();
    let nomeUtilizador = document.getElementById('campoNome').value;
    alert("Parabéns, " + nomeUtilizador + "! Conta criada com sucesso.");
}