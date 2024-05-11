const pelata = document.getElementById("paleta")
const painel = document.getElementById("painel")


let rs = "<table>";
for (let linha = 1; linha <= 10; linha++) {
    rs += "<tr>"
    for (let colum = 1; colum <=    60; colum++) {
        let r = parseInt(Math.random() * 255)
        let g = parseInt(Math.random() * 255)
        let b = parseInt(Math.random() * 255)
        rs += "<td onClick = mudarCor("+r+","+g+","+b+") style=background-color:rgb("+r+","+g+","+b+")>     </td>"
    }
    rs += "</tr>"
}
rs += "</table>"

paleta.innerHTML = rs


function mudarCor(red , green , blue) {
    // console.log(red , green , blue)
    painel.style.backgroundColor=`rgb(${red}, ${green},  ${blue})`
}

