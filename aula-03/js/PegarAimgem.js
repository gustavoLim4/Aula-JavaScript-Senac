//Atribuindo a class "fotoNav" para uma variavel 
var fotoNav = document.getElementById("fotoNav") 
var full = document.getElementById("full")

//laço de repetição com a variavel "i" que termina quando chegar no 5 que é de acordo de quantas images tem
for (var i = 1; i <= 5; i++) {
    fotoNav.innerHTML += "<img src =img/foto"+i+".jpg onclick = abrir("+i+")>"
}
//função abrir que vem do onclick "i" e variavel "p" recebe o numero que o usuario clicar 
function abrir (p) { 
    full.innerHTML = "<img src = img/foto"+p+".jpg>"
}