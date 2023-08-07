function calcular() {
    let numero1 = document.getElementById("num1");
    let numero2 = document.getElementById("num2");

    let media = (Number.parseInt(numero1.value) + Number.parseInt(numero2.value)) /2;
    console.log(media)

    let paragrafo = document.createElement("p");
    paragrafo.innerHTML = media;
    document.body.appendChild(paragrafo)
}