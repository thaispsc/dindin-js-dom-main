// o header deve ter a cor de fundo #2E948A

let header = document.getElementsByTagName("header");

header[0].style.backgroundColor = "#2E948A";

let pathname = window.location.pathname;

if (pathname === "/index.html") {
  //está faltando o link do item Cursos

  let linkCursos = document.querySelector("#menu_opcoes nav a:nth-child(1)");

  linkCursos.setAttribute("href", "Cursos.html");

  //Na etapa de depoimentos, o titulo deveria ser "O que falam sobre nós"

  document.querySelector(".titulo.depoimento h3").innerHTML =
    "O que falam sobre nós";

  // No banner da home, está faltando centralizar os elementos filhos da section

  let introducao = document.getElementById("introducao");

  introducao.style.justifyContent = "center";

  //Na etapa de blog, o título deveria ser "Mais conteúdo pra você"

  document.querySelector("#falam_sobre+.titulo h3").innerText =
    "Mais conteúdo pra você";

  //Todos os textos que estiverem com a classe.titulo devem estar em maiúsculo.

  let titulos = document.querySelectorAll(".titulo");

  titulos.forEach((titulo) => {
    titulo.style.textTransform = "uppercase";
  });

  // o botão "ver todos os posts" deve ter um link que direciona p/ o arquivo blog.html

  let botao = document.querySelector("#todos_posts");

  botao.setAttribute("href", "blog.html");

  //Adicionar um novo curso na section que contém o id investimentos_poupando_independencia

  let cursosAtualizados = document.querySelector(
    "#investimentos_poupando_independencia"
  );

  cursosAtualizados.innerHTML =
    cursosAtualizados.innerHTML +
    `<div id="independencia"><img src="/imagens/independencia_financeira.png" width="180px" alt="Independência Financeira"><h2>Independência Financeira</h2><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p><a class="comecar_agora" href="./curso.html">começar
agora</a></div>`;
}

if (pathname === "/contato.html") {
  //O formulário não está funcionando, o atributo action deve mandar para url sucesso.html

  let form = document.querySelector("form");

  form.setAttribute("action", "sucesso.html");

  //Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone

  let telefoneInput = document.createElement("input");

  telefoneInput.setAttribute("type", "tel");

  telefoneInput.setAttribute("placeholder", "telefone");

  let textarea = document.querySelector("#formulario textarea");

  form.insertBefore(telefoneInput, textarea);

  //O campo de mensagem está ultrapassando o tamanho do elemento pai. Adicione o atributo box-sizing:border-box

  textarea.style.boxSizing = "border-box";

  //O botão não está do tamanho adequado, precisa ter uma largura maior

  let botao = document.getElementById("enviar");
  botao.style.width = "100px";

  //Abaixo da section do formulário, adicione uma seção de comentário igual a página Home

  let tituloComentarios = document.createElement("section");

  tituloComentarios.setAttribute("class", "titulo depoimento");

  tituloComentarios.innerHTML = `<h3>Depoimentos</h3>`;

  let comentarios = document.createElement("section");

  comentarios.setAttribute("id", "falam_sobre");

  comentarios.innerHTML = `<div class="depoimentos">
  <img src="/imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
  <p>
      ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
      totam rem aperiam.”
      <br>
      <br>
      Wally, 25
  </p>
</div>

<div class="depoimentos">
  <img src="/imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">
  <p>
      ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam.”
      <br>
      <br>
      Jaden Smith, 23
  </p>
</div>

<div class="depoimentos">
  <img src="/imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">
  <p>
      ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam.”
      <br>
      <br>
      Whoopi Goldberg, 37
  </p>
</div>

<div class="depoimentos">
  <img src="/imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">
  <p>
      ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam.”
      <br>
      <br>
      Janes Joplin, 29
  </p>
</div>`;

  let main = document.querySelector("main");

  main.append(tituloComentarios, comentarios);

  let comentariosEstilo = document.querySelector("head");
  comentariosEstilo.innerHTML +=
    '<link rel="stylesheet" href="/css/index.css">';
}
