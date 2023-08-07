function converter() {
    let dinheiro = document.getElementById('dinheiro');

    dolar = "$" + (Number.parseFloat(dinheiro.value) / 3.45).toFixed(2)

    resposta = "R$" + (Number.parseFloat(dinheiro.value)).toFixed(2) + " em dólares é: <br>" +
    dolar    

    resultado = document.createElement('p');
    resultado.innerHTML = resposta;
    document.body.appendChild(resultado);
}