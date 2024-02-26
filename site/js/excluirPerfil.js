const modal = document.querySelector('#modalDeleteBackground')

function closeModalDeleteHome() {
  modal.classList.remove('active')
  window.location.href = "index.html";
}

function OPEN_MODAL_DELETE() {
  modalDeleteBackground.style.display = 'flex';
}

function CLOSE_MODAL_DELETE() {
  modalDeleteBackground.style.display = 'none';
}

$(() => {
  var id = localStorage.getItem("UserID");
  console.log(`https://localhost:7249/user?id=${localStorage.getItem('userID')}`);

  $("#btnDeletePerfil").click((e) => {
    e.preventDefault();

    const data = {
      Id: id,
    };

    $.ajax({
      type: "DELETE",
      url: `https://localhost:7249/user?id=${localStorage.getItem('userID')}`,
      data: JSON.stringify(data),
      success: (result) => {
        console.log(data);
        location.href = "index.html";
        localStorage.clear();
      },
      contentType: "application/json",
      dataType: "json",
    });
  });
});
