let px = 0
let canto = 0
function movienta() {

    if (px >= 1550) {
        px = 1550
    }
    else {
        px += 5
    }
    document.getElementById("um").style.marginLeft = px + "px"
    document.getElementById("um").style.borderRadius = canto + "px"
    canto += 5
    let r = parseInt(Math.random() * 255)
    let g = parseInt(Math.random() * 255)
    let b = parseInt(Math.random() * 255)

    document.getElementById("um").style.backgroundColor = `rgb(${r},${g},${b})`;
    document.getElementById("um").style.border = `rgb(${r},${g},${b})`;
}

function relogio() {
    let tempo = new Date()
    let hora = tempo.getHours()
    let minuto = tempo.getMinutes()
    let segundo = tempo.getSeconds()
    document.getElementById("dois").innerHTML = `${hora} : ${minuto} : ${segundo}`
}
let tm = 1;
let estado = "aumentar"
const el = setInterval(() => {

    if (tm >= 2) {
        estado = "diminuir"
    }
    if (tm <= 1) {
        estado = "aumentar"
    }
    if (estado == "aumentar") {
        tm += 0.1
    }
    else {
        tm -= 0.1
    }

    document.getElementById("tres").style.transform = `scale(${tm})`

}, 200)


let pos = 0
let direcao = "direita"
function mover() {
    if (pos >= 1550) {
        direcao = "esquerda"
        document.getElementById("quatro").style.backgroundColor = `blue`;
    }
    if (pos <= 1) {
        direcao = "direita"
        document.getElementById("quatro").style.backgroundColor = `red`;
    }


    if (direcao == "direita") {
        pos += 5
    }
    else {
        pos -= 5
    }
    document.getElementById("quatro").style.left = `${pos}px`

}



window.setInterval(mover, 5)
window.setInterval(relogio, 5)
window.setInterval(movienta, 5)