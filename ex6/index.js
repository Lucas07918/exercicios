function antecessor() {
    let numero = document.getElementById("numero");

    let antecessor = "O antecessor é: " + (Number.parseInt(numero.value) - 1)
    + " e o sucessor é: " + (Number.parseInt(numero.value) + 1);

    let resultado = document.createElement('p');
    resultado.innerHTML = antecessor;
    document.body.appendChild(resultado);
}