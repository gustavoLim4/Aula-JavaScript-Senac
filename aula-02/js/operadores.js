numero1 = prompt("Digite um numero :")
numero2 = prompt("Digite outro numero :")

numero1 = parseInt(numero1) // Converter um numero interiro porque as variaveis passam pelo promt ele é tratado com string 
numero2 = parseInt(numero2)

soma = numero1 + numero2 
subtrair = numero1 - numero2
multplicar = numero1 * numero2
dividir = numero1 / numero2
resto = numero1 % numero2
document.getElementsByTagName("div")[0].innerHTML = soma + "<br>" +multplicar+ "<br>" +dividir+ "<br>" +resto ;