
escolha = prompt("Digite uma das opções a cor de fundo : \n1-Azul\n2-Vermelho\n3-Amarelo\n4-cinza")

var cor = "white"

if (escolha == 1) {
    cor = "blue"
}
else if (escolha == 2) {
    cor = "Red"
}
else if (escolha == 3) {
    cor = "yellow"
}
else if (escolha == 4) {
    cor = "gray"
}
else {
    cor 
}

document.body.style.backgroundColor = (cor)