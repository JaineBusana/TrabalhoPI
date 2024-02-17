
const data = {
    id: $("#id").val(),
    name: $("#name").val(),
    street: $("#street").val(),
    number: $("#number").val(),
}




$.ajax({
    type: "GET",
    url: "https://localhost:7249/cadastroponto/20",
    data: JSON.stringify(data),
    //     headers: {
    //         Authorization: `Bearer ${localStorage.getItem(`token`)}`,
    //       },
    success: function (data) {
        // Limpa o conteúdo atual da tbody
        // $('tbody').empty();

        // Limpa o conteúdo atual da carrossel
        $('.infoResiduoColeta').empty();

        // Itera sobre os dados recebidos e adiciona à tbody e à carrossel
        // $.each(data, function (index, item) {
            const cardHTML = `
            
                 <h2>${data.name}</h2>
                <h3>Endereço</h3>
                 <p>${data.name}</p>
                 <h3>Observação</h3>
                 <p>${data.name}</p>
            
                `;
            // $('tbody').append(cardHTML);
            $('.infoLocate').append(cardHTML);
        // });
        $.each(data, function (index, item) {
            const cardHTML = `
                     <div class="item cardResidue">
                        <h3>${item.name}</h3>
                        <ul>
                            <li>${item.street}</li>
                            <li>${item.number}</li>
                            <!-- Adicione mais itens conforme necessário -->
                        </ul>
                    </div>
                `;
            // $('tbody').append(cardHTML);
            $('.infoResiduoColeta').append(cardHTML);
        });
        // Inicialize o carrossel após adicionar os itens
        $('.owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            items: 2,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                1200: {
                    items: 2,
                    nav: false
                },
            }
        })
    },
    contentType: "application/json",
    dataType: "json",
});






