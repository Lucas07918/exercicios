function calcular() {
    let valor = document.getElementById("metros");

    let m = Number.parseFloat(valor.value) + 'm'
    let mm = (Number.parseFloat(valor.value) * 1000) + 'mm'
    let cm = (Number.parseFloat(valor.value)  * 100) + 'cm'
    let km = (Number.parseFloat(valor.value) / 1000) + 'km'

    calculo = m + "<br>" + mm + "<br>" + cm + "<br>" + km;

    let resultado = document.createElement('p');
    resultado.innerHTML = calculo;
    document.body.appendChild(resultado);

}