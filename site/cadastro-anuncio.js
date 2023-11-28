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

        const nomeValor = nome.value;
        const descricaoValor = descricao.value;
        const modalidadeValor = modalidade.value;
        const bairroValor = bairro.value;
        const cepValor = cep.value;
        const categoriaValor = categoria.value;
        const subcategoriaValor = subcategoria.value;
        const valorValor = valor.value;
        const quantidadeValor = quantidade.value;
        const telefoneValor = telefone.value;
        const whatsappValor = whatsapp.value;

        if (nomeValor === '' || descricaoValor === '' || modalidadeValor === '' ||
            bairroValor === '' || cepValor === '' || categoriaValor === '' ||
            subcategoriaValor === '' || valorValor === '' || quantidadeValor === '' ||
            telefoneValor === '' || whatsappValor === '') {

            errorMessage.innerHTML = "Preencha todos os campos";
            errorMessage.classList.add("error");
            return
        }

    })





    function submitForm(event) {

        event.preventDefault();

        var nome = document.forms["formulario"]["nome"].value;
        var descricao = document.forms["formulario"]["descrição"].value;
        var modalidade = document.forms["formulario"]["modalidade"].value;
        var bairro = document.forms["formulario"]["bairro"].value;
        var cep = document.forms["formulario"]["cep"].value;
        var categoria = document.forms["formulario"]["select-categoria"].value;
        var subcategoria = document.forms["formulario"]["subcategoria"].value;
        var valor = document.forms["formulario"]["valor"].value;
        var quantidade = document.forms["formulario"]["quantidade"].value;
        var whatsapp = document.forms["formulario"]["whatsapp"].value;
        var telefone = document.forms["formulario"]["telefone"].value;




        var dataForm = {

            nome: nome,
            descricao: descricao,
            modalidade: modalidade,
            bairro: bairro,
            cep: cep,
            categoria: categoria,
            subcategoria: subcategoria,
            valor: valor,
            quantidade: quantidade,
            whatsapp: whatsapp,
            telefone: telefone

        };




        var dataStore = localStorage.getItem('data') || '[]';
        var dataArray = JSON.parse(dataStore);
        dataArray.push(dataForm);

        localStorage.setItem('data', JSON.stringify(dataArray));
        console.log('Cadastro Salvo!', dataArray);

    }

});
