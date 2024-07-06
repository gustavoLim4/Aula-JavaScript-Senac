document.querySelector("#menu").onclick=()=>{
    document.querySelector("#nav").style.top="0px"
}

document.querySelector("#fechar").onclick=()=>{
    document.querySelector("#nav").style.top="-100px"
}


const section_listar = document.querySelector("#listar")
const section_resultado = document.querySelector("#resultado")
const section_inserir = document.querySelector("#inserir")

function listar() {
    //esconder a section listar e inserir 
    section_resultado.style.display = "none"
    section_inserir.style.display = "none"
    //section tem que esta visivel 
    section_listar.style.display = "block"
}