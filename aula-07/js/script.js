function quadradoAZ() {
    //criar um elemento HTML do tipo div e adicional-lo na tela 
    const divAZ = document.createElement("div")
    //adicionar um atributo de classe a nossa div
    divAZ.setAttribute("class", "divAzul")
    divAZ.setAttribute("id", "divAzul")
    //colocar a div la no documento html
    document.body.appendChild(divAZ)
}

document.body.onload = quadradoAZ();

document.getElementById("divAzul").onmouseover = function () {

    document.getElementById("divAzul").style.backgroundColor="rgb(37, 37, 255)"
}

document.getElementById("divAzul").onmouseout = function () {

    document.getElementById("divAzul").style.backgroundColor="blue0"
}

const msg = function() {
    soma()
}

const soma = function() {
    let n1 = prompt("digite um valor")
    let n2 = prompt("digite outro valor")
    let resp = parseInt(n1)+parseInt(n2)

    const label = document.createElement("label")
    label.innerHTML=resp
    document.body.appendChild(label)
}

const msg2 = () =>{
    const es = prompt("Quantos botões vc quer")
    for (let i = 0; i < es ; i++) {
        const bt = document.createElement("button")
        bt.innerHTML= `botão ${i}`;
        document.body.appendChild(bt)
    }
}
document.getElementById("divAzul").onclick=msg2