function quadradoAZ() {
    //criar um elemento HTML do tipo div e adicional-lo na tela 
    const divAZ = document.createElement("div")
    //adicionar um atributo de classe a nossa div
    divAZ.setAttribute("class","divAzul")
    //colocar a div la no documento html
    document.body.appendChild(divAZ) 
}

document.body.onload= quadradoAZ();