window.addEventListener("load", (event) => {

    const form = document.getElementById("formSuggestion");
    const textSuggestion = document.getElementById("textSuggestion")


    form.addEventListener("submit", (e) => {
        e.preventDefault();

        checkForm();
    })

    textSuggestion.addEventListener("blur", () => {
        checkTextSuggestion();
    })



    function checkTextSuggestion() {
        const textSuggestionValue = textSuggestion.value;

        if (textSuggestionValue === "") {
            errorInput(textSuggestion, " É necessário preencher o campo!")
        } else {
            const formItem = textSuggestion.parentElement;
            formItem.className = "formContentSuggestion"
        }

    }


    function checkForm() {
        checkTextSuggestion();

        const sucessMessage = document.querySelector('.msgSuggestion')

        const formItems = form.querySelectorAll(".formContentSuggestion")

        const isValid = [...formItems].every((item) => {
            return item.className === "formContentSuggestion"
        });

        if (isValid) {

            sucessMessage.innerHTML = "Sugestão Enviada!";
            sucessMessage.classList.add("sucess");

            setTimeout(() => {
                sucessMessage.innerHTML = "";
                sucessMessage.classList.remove("sucess");
            }, 5000);
        }

    }

    function errorInput(textArea, message) {
        const formItem = textArea.parentElement;
        const textMessage = formItem.querySelector("a")

        textMessage.innerText = message;

        formItem.className = "formContentSuggestion error"

    }
});