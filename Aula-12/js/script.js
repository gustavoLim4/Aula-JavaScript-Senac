document.querySelector("#menu").onclick = () => {
  document.querySelector("#nav").style.top = "0px";
};

document.querySelector("#fechar").onclick = () => {
  document.querySelector("#nav").style.top = "-100px";
};

const section_listar = document.querySelector("#listar");
const section_resultado = document.querySelector("#resultado");
const section_inserir = document.querySelector("#inserir");

function listar() {
  //esconder a section listar e inserir
  section_resultado.style.display = "none";
  section_inserir.style.display = "none";
  //section tem que esta visivel
  section_listar.style.display = "block";

  //fazer referencia a div chamada listarlivros para monstra os livros da api

  const listar_livros = document.querySelector("#listarlivros");

  fetch("http://10.26.44.14:5000/api/v1/livros/listar")
    .then((res) => res.json())
    .then((dados) => {
      dados.payload.map((livroItem) => {
        let caixa = document.createElement("div");
        caixa.setAttribute("class", "caixa");

        let capa = document.createElement("img");
        capa.src = livroItem.foto1;

        let titulo = document.createElement("h4");
        titulo.innerHTML = livroItem.titulo;

        let autor = document.createElement("h5");
        autor.innerHTML = livroItem.autor;

        let preco = document.createElement("p");
        preco.setAttribute("class", "preco");
        preco.innerHTML = livroItem.precoatual;

        caixa.appendChild(capa);
        caixa.appendChild(titulo);
        caixa.appendChild(autor);
        caixa.appendChild(preco);

        listar_livros.appendChild(caixa);
      });
    })
    .catch((erro) => console.log(`Erro ao carregador os dados ${erro}`));
}

function resultado() {
  //esconder a section listar e inserir
  section_resultado.style.display = "block";
  section_inserir.style.display = "none";
  //section tem que esta visivel
  section_listar.style.display = "none";

  const buscar = document.querySelector("#buscar");
  const resultadoDaBusca = document.querySelector(".resultadoBSC");
  resultadoDaBusca.innerHTML =
    " <h2 class=pes>Você pesquisou por : " + buscar.value + "</h2>";

  fetch("http://10.26.44.14:5000/api/v1/livros/pesquisar/" + buscar.value)
    .then((res) => res.json())
    .then((dados) => {
      dados.payload.map((livroItem) => {
        let caixa = document.createElement("div");
        caixa.setAttribute("class", "caixa");

        let capa = document.createElement("img");
        capa.src = livroItem.foto1;

        let titulo = document.createElement("h4");
        titulo.innerHTML = livroItem.titulo;

        let autor = document.createElement("h5");
        autor.innerHTML = livroItem.autor;

        let preco = document.createElement("p");
        preco.setAttribute("class", "preco");
        preco.innerHTML = livroItem.precoatual;

        caixa.appendChild(capa);
        caixa.appendChild(titulo);
        caixa.appendChild(autor);
        caixa.appendChild(preco);

        resultadoDaBusca.appendChild(caixa);
      });
    })
    .catch((erro) => console.log(`Erro ao carregadorar os dados ${erro}`));
}

function abrirOcadastro() {
  //esconder a section listar e inserir
  section_resultado.style.display = "none";
  section_inserir.style.display = "block";
  //section tem que esta visivel
  section_listar.style.display = "none";
}

function inserir() {
  const txtTitulo = document.querySelector("#txtTitulo");
  const txtAuto = document.querySelector("#txtAuto");
  const txtPreco = document.querySelector("#txtPreco");
  const txtFoto1 = document.querySelector("#txtFoto1");
  const txtFoto2 = document.querySelector("#txtFoto2");
  const txtGenero = document.querySelector("#txtGenero");
  const txtsinopse = document.querySelector("#txtsinopse");

  fetch("http://10.26.44.14:5000/api/v1/livros/cadastrar", {
    method: "POST",
    headers: {
      "accept" : "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      titulo: txtTitulo.value,
      autor: txtAuto.value,
      precoatual: txtPreco.value,
      foto1: txtFoto1.value,
      foto2: txtFoto2.value,
      genero: txtGenero.value,
      sinopse: txtsinopse.value,
    }),
  })
    .then((res) => res.json())
    .then((dados) => {
      if (dados.msg == "OK") {
        return alert("Livro cadastrado");
      } else {
        alert(dados.msg);
      }
    })
    .catch((erro) => console.log("Erro ao cadastrar " + erro));
}
