const modalCoupom = document.querySelector('.modalTrocaCupomContent');
const modalConfirmn = document.querySelector('.modalTrocaConfirmnContent');

function modalCoupomOpen() {
  modalCoupom.style.display = 'flex';
}

function modalCoupomClose() {
  modalCoupom.style.display = 'none';
}

function modalConfirmnClose() {
  modalConfirmn.style.display = 'none';
}

function modalConfirmnOpen() {
  modalCoupom.style.display = 'none';
  modalConfirmn.style.display = 'flex';
}

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
