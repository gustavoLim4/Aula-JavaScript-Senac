var fotoNav = document.getElementsByClassName("fotoNav")[0]
var full = document.getElementsByClassName("full")[0]


for (var i = 1; i <= 5; i++) {
    fotoNav.innerHTML += "<img src =img/foto"+i+".jpg onclick = abrir("+i+")>"
}


// document.getElementsByTagName("img")[0].onclick = function() {
//   full.innerHTML = "<img src = img/foto1.jpg>"
// }
// document.getElementsByTagName("img")[1].onclick = function() {
//   full.innerHTML = "<img src = img/foto2.jpg>"
// }


function abrir (p) { 
    full.innerHTML = "<img src = img/foto"+(p)+".jpg>"
}