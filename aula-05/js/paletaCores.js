const pelata = document.getElementById("paleta")
const painel = document.getElementById("painel")


let rs = "<table>";
for (let linha = 1; linha <= 10; linha++) {
    rs += "<tr>"
    for (let colum = 1; colum <= 30; colum++) {
        let r = parseInt(Math.random() * 255)
        let g = parseInt(Math.random() * 255)
        let b = parseInt(Math.random() * 255)
        rs += "<td style=background-color:rgb("+r+","+g+","+b+")>cor</td>"
    }
    rs += "</tr>"
}
rs += "</table>"

paleta.innerHTML = rs

