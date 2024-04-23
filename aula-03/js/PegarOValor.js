

function resultado () {
    

    var nome = document.getElementsByTagName("input")[0].value
    var idade = document.getElementsByTagName("input")[1].value

    
    document.getElementsByTagName("label")[2].innerHTML = `Olá ${nome} sua idade é ${idade} anos`
}