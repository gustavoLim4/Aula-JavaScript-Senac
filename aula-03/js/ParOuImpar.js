
var num = parseFloat(prompt("Qual a sua nota"));

var resultado

if (num % 2 == 0 ) {
    resultado = "O numero é Par"
}
else {
    resultado = "O numero é Impar"
}

document.getElementsByTagName("h1")[0].innerHTML = (resultado) 



