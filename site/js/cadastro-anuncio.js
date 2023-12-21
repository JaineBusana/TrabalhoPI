window.addEventListener("load", (event) => {

    const nome = document.querySelector(`#nome`)
    const descricao = document.querySelector(`#descrição`)
    const modalidade = document.querySelector(`#modalidade`)
    const bairro = document.querySelector(`#bairro`)
    const cep = document.querySelector(`#cep`)
    const categoria = document.querySelector(`#categoria`)
    const subcategoria = document.querySelector(`#subcategoria`)
    const valor = document.querySelector(`#valor`)
    const quantidade = document.querySelector(`#quantidade`)
    const telefone = document.querySelector(`#telefone`)
    const whatsapp = document.querySelector(`#whatsapp`)

    const button = document.querySelector(`#btn-salvar`)


    button.addEventListener(`click`, (e) => {
        e.preventDefault()
        
        const errorMessage = document.querySelector('.msg')

        const value = {
            nome: nome.value,
            descricao: descricao.value,
            modalidade: modalidade.value,
            bairro: bairro.value,
            cep: cep.value,
            categoria: categoria.value,
            subcategoria: subcategoria.value,
            valor: valor.value,
            quantidade: quantidade.value,
            telefone: telefone.value,
            whatsapp: whatsapp.value

        }
 

        if (value.nome === '' || value.descricao === '' || value.modalidade === '' ||
            value.bairro === '' || value.categoria === '' ||
            value.subcategoria=== '' || value.valor === '' || value.whatsapp === '') {

            errorMessage.innerHTML = "Preencha todos os campos";
            errorMessage.classList.add("error");
            
            setTimeout(() => {
                errorMessage.innerHTML = "";
                errorMessage.classList.remove("error");
            },3000);
        }
        else {
            console.log(value);
            
            errorMessage.innerHTML = "Cadastro salvo!";
            errorMessage.classList.add("error");
    
            setTimeout(() => {
              errorMessage.innerHTML = "";
              errorMessage.classList.remove("error");
          },3000);
        }

    })
 
});
