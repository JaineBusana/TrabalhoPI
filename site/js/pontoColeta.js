window.addEventListener("load", (event) => {

    const neighborhood = document.querySelector(`#select-neighborhood`)
    const residue = document.querySelector(`#select-residue`)

    const buttonLocal = document.querySelector(`#btnLocal`)


    buttonLocal.addEventListener(`click`, (e) => {
        e.preventDefault()
        
        const errorMessage = document.querySelector('.msg')

        const value = {
            neighborhood: neighborhood.value,
            residue: residue.value

        }
 

        if (value.neighborhood === '' || value.residue === '') {

            errorMessage.innerHTML = "Preencha todos os campos";
            errorMessage.classList.add("error");
            
            setTimeout(() => {
                errorMessage.innerHTML = "";
                errorMessage.classList.remove("error");
            },3000);
        }

    })
    
 
});
