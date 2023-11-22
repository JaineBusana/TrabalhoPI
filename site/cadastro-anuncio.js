document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (event) {

        const input = formulario.querySelectorAll("input[required]");
        let inputPreenchido = true;

        input.forEach(function (input) {
            if (input.value.trim() === "") {
               
                input.classList.add("error");
                inputPreenchido = false;
            } else {
                input.classList.remove("error");
            }
        });

        if (!inputPreenchido) {
            event.preventDefault();
        }
    });
});