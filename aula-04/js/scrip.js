var trocasIMG = 1
// na variavel global para acionar a função do botão reduz a variavel e faz a troca no innerHTMl pela variavel posicao
function esquerda () {

    if (trocasIMG <= 1 ) {
        trocasIMG = 1
    }
    else{
        trocasIMG--
    }
    
    document.getElementById("foto").innerHTML = "<img src = img/foto"+trocasIMG+".jpg>"
}


function direita () {
    if (trocasIMG >= 5  ) {
        trocasIMG = 5
    }
    else{
        trocasIMG++
    }

    
    document.getElementById("foto").innerHTML = "<img src = img/foto"+trocasIMG+".jpg>"
}