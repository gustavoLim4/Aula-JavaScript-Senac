
var opcao = "";
opcao = prompt("digite :\n 1 - Soma \n 2 - Subtrair \n 3 - Multiplicar \n 4 - dividir \n S - Para sair");
while (opcao != "S" && opcao != "s") {
    if (opcao < 1 || opcao > 4) {
        alert("Opção Inválida")
    }
    else {
        var n1 = prompt("Digite um numero :")
        var n2 = prompt("Digite outro numero :")
        //Converter n1 e n2 para numeros de ponto flutuante(flote)
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);

        var resultado = 0;
        if (opcao == "1") {
            resultado = n1 + n2
        }
        else if (opcao == "2") {
            resultado = n1 - n2
        }
        else if (opcao == "3") {
            resultado = n1 * n2
        }
        else if (opcao == "4") {
            resultado = n1 / n2
        }
        else {
            resultado = "Opção invalida";
        }
        alert(resultado)
    }
    opcao = prompt("digite :\n 1 - Soma \n 2 - Subtrair \n 3 - Multiplicar \n 4 - dividir \n S - Para sair");
}
// document.getElementById("result").innerHTML = resultado