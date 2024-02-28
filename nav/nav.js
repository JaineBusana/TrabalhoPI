const navigationBar = document.querySelector('.navigationBar');
const navHome = document.querySelector('.navHome');
const navIndex = document.querySelector('.navIndex');
const navCidadao = document.querySelector('.navCidadao');
const navColetor = document.querySelector('.navColetor');
const typeLog = localStorage.getItem('userType');




console.log(typeLog)
// Verificar se o localStorage está vazio
if (typeLog === "coletor") {
  const cardHTML = `
  <li class="navItem "><a href="index.html">Home</a></li>
  <li class="navItem"><a href="pontoColeta.html">Pontos de coleta</a></li>
  <li class="navItem"><a href="sugestao.html">Sugestão</a></li>
  <li class="navItem"><a href="meusPontos.html">Meus pontos</a></li>
  <li class="navItem"><a href="registroColeta.html">Registrar coleta</a></li>
  <li class="navItem perfil"><a onclick="OPEN_MODAL_PERFIL()">Perfil</a></li>
  `;

  $('.navIndex').append(cardHTML);
  const perfil = document.querySelector('.perfil');
  perfil.addEventListener('click', () => {
    navIndex.classList.remove('ativo');
    navHome.classList.toggle('ativo');
    navigationBar.classList.toggle('ativo');
   
  });
}
else if (typeLog === "cidadao") {
  const cardHTML = `
  <li class="navItem "><a href="index.html">Home</a></li>
  <li class="navItem"><a href="pontoColeta.html">Pontos de coleta</a></li>
  <li class="navItem"><a href="sugestao.html">Sugestão</a></li>
  <li class="navItem"><a href="indexTrocaPonto.html">Troca Ponto</a></li>
  <li class="navItem perfil"><a onclick="OPEN_MODAL_PERFIL()">Perfil</a></li>
  `;

  $('.navIndex').append(cardHTML);
  const perfil = document.querySelector('.perfil');
  perfil.addEventListener('click', () => {
    navIndex.classList.remove('ativo');
    navHome.classList.toggle('ativo');
    navigationBar.classList.toggle('ativo');
   
  });
}
else {
  const cardHTML = `
  <li class="navItem "><a href="index.html">Home</a></li>
  <li class="navItem"><a href="pontoColeta.html">Pontos de coleta</a></li>
  <li class="navItem"><a href="sugestao.html">Sugestão</a></li>
  <li class="navItem login" onclick="SHOW_MODAL_LOGIN()"><a href="#">Login</a></li>
  `;

  $('.navIndex').append(cardHTML);
  const login = document.querySelector('.login');
  login.addEventListener('click', () => {
    navIndex.classList.remove('ativo');
    navHome.classList.toggle('ativo');
    navigationBar.classList.toggle('ativo');
   
  });
}
navigationBar.addEventListener('click', () => {
  navigationBar.classList.toggle('ativo');
  navIndex.classList.toggle('ativo');
  navHome.classList.toggle('ativo');
});

