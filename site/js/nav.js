window.addEventListener("load", (event) => {

  const menu = document.querySelector('.navigationBar');
  const NavMenu = document.querySelector('.menuNav')
  const NavHome = document.querySelector('.navHome')
  const btnProfilePicture = document.querySelector('.btnProfilePicture')
  const modalProfilePicture = document.querySelector('.modalProfilePicture')


  menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
    NavHome.classList.toggle('ativo');
  })

  $(".btnProfilePicture").click(() => {
    modalProfilePicture.classList.toggle('ativo');
  })

  // // $('body').on('click', ".btnProfilePicture", function (event) {
  // //   $('.modalProfilePicture').css('display', 'flex');

  
  // });

})