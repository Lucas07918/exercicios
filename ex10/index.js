function calcular() {
    let largura = document.getElementById("largura");
    let altura = document.getElementById("altura");

    let area = (Number.parseFloat(largura.value)).toFixed(2) * 
    (Number.parseFloat(altura.value)).toFixed(2);

    let tinta = "Área: " + area + "m <br>" + "Quantidade de tinta necessária: " + (area / 2).toFixed(2)
    + "L";

    let resultado = document.createElement('p');
    resultado.innerHTML = tinta;
    document.body.appendChild(resultado);
}