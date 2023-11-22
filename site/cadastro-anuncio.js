const form = document.getElementById('form');
const nome = document.getElementById('nome');
const descrição = document.getElementById('descrição');
const modalidade = document.getElementById('modalidade');
const bairro = document.getElementById('bairro');
const cep = document.getElementById('cep');
const categoria = document.getElementById('categoria');
const subcategoria = document.getElementById('subcategoria');
const valor = document.getElementById('valor');
const quantidade = document.getElementById('quantidade');
const whastapp = document.getElementById('whatsapp');
const telefone = document.getElementById('telefone');

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

function checkInputs() {
    const nomeValue = nome.value;
    const descriçãoValue = descrição.value;
    const modalidadeValue = modalidade.value;
    const bairroValue = bairro.value;
    const cepValue = cep.value;
    const categoriaValue = categoria.value;
    const subcategoriaValue = subcategoria.value;
    const valorValue = valor.value;
    const whatsappValue = whastapp.value;
    const telefoneValue = telefone.value;

    if(nomeValue == ''){
       ("#nome") = "sucess";

    }
}

