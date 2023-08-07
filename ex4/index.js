function somar() {
    console.log("cheguei")
    let numero1 = document.getElementById("num1");
    let numero2 = document.getElementById("num2");

    let soma = Number.parseInt(numero1.value) + Number.parseInt(numero2.value);

    document.getElementById('soma').textContent = soma;
 }