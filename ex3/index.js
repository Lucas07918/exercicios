function mostrarMensagem() {
    console.log("cheguei")
    let nome = document.getElementById("nome");
    let salario = document.getElementById("salario");
    console.log(nome);
    let mensagem = "nome: " + nome.value + ' salario: ' + salario.value;

    document.getElementById('mensagem').textContent = mensagem;
}