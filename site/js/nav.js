window.addEventListener("load", (event) => {

  const menu = document.querySelector('.navigationBar');
  const NavMenu = document.querySelector('.menuNav')
  const NavHome = document.querySelector('.navHome')
 


  menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
    NavHome.classList.toggle('ativo');
  })

// ANTIGO QUE FAZIA ABRIR E FECHAR MAS NN ESTA MAIS FUNCIONANDO
//   $(".btnProfilePicture").click(() => {
//     $('.modalProfilePicture').toggleClass('ativo');
// });

  $('body').on('click', ".btnProfilePicture", function (event) {
    $('.modalProfilePicture').css('display', 'flex');

  });


})