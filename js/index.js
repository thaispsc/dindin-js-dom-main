// o header deve ter a cor de fundo #2E948A

let header = document.getElementsByTagName("header");

header[0].style.backgroundColor = "#2E948A";

//está faltando o link do item Cursos
let linkCursos = document.querySelector("#menu_opcoes nav a:nth-child(1)");

console.log(linkCursos);

linkCursos.setAttribute("href", "Cursos.html");

//Na etapa de depoimentos, o titulo deveria ser "O que falam sobre nós"

document.querySelector(".titulo.depoimento h3").innerHTML =
  "O que falam sobre nós";

let introducao = document.getElementById("introducao");

introducao.style.justifyContent = "center";

let titulos = document.querySelectorAll(".titulo");

console.log(titulos);

titulos.forEach((titulo) => {
  titulo.style.textTransform = "uppercase";
});

let botao = document.querySelector("#todos_posts");

botao.setAttribute("href", "blog.html");

let cursosAtualizados = document.querySelector(
  "#investimentos_poupando_independencia"
);

cursosAtualizados.innerHTML =
  cursosAtualizados.innerHTML +
  `<div id="independencia"><img src="/imagens/independencia_financeira.png" width="180px" alt="Independência Financeira"><h2>Independência Financeira</h2><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p><a class="comecar_agora" href="./curso.html">começar
agora</a></div>`;

let form = document.querySelector("form");

form.setAttribute("action", "sucesso.html");
