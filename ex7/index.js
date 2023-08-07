function calcular() {
    let numero = document.getElementById("numero");

    
    let dobro = "O dobro de " + Number.parseFloat(numero.value) + " é "
    + (Number.parseFloat(numero.value) * 2);

    let resultado = document.createElement('p');
    resultado.innerHTML = dobro;
    document.body.appendChild(resultado)

    let terco = "O terço de " + Number.parseFloat(numero.value) + " é "
    + (Number.parseFloat(numero.value) / 3);

    let resultado2 = document.createElement('p');
    resultado2.innerHTML = terco;
    document.body.appendChild(resultado2)
}