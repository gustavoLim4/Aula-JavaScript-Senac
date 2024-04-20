var fotoNav = document.getElementsByClassName("fotoNav")[0]
// var full = document.getElementsByClassName("full")[0]


for (var i = 1; i <= 5; i++) {
    fotoNav.innerHTML += "<img src =img/foto"+i+".jpg>"
}