function enviarInstrucoes(evento) {
    evento.preventDefault();
    let emailUtilizador = document.getElementById('emailRecuperacao').value;
    alert("Instruções de recuperação enviadas com sucesso para: " + emailUtilizador);
}