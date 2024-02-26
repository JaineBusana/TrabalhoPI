const nameTitlePerfil = document.querySelector('#nameTitlePerfil')

function OPEN_MODAL_PERFIL() {
    modalPerfil.style.display = 'flex';
}

function CLOSE_MODAL_PERFIL() {
    modalPerfil.style.display = 'none';
}

$(() => {
    var name = localStorage.getItem("userName");
    var titlename = document.getElementById("nameTitlePerfil");
    titlename.textContent = name;
    var type = localStorage.getItem("userType");
    if (type == "cidadao"){
        type = "Cidadão"
    }
    else {
        type = "Coletor"
        profilePickup.style.display = 'none';
    }
    var titleType = document.getElementById("typePerfil");
    titleType.textContent = type;
    var score = localStorage.getItem("userScore");
    var scoreUser = document.getElementById("profilePoints2");
    scoreUser.textContent = score + " Pontos";
})