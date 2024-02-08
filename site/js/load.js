$(() => {
    $.get('index.html', (result) => {
        $('main').append(result);
    })
});

$("#btnHome").click(function () {
    $.get('index.html', (result) => {
        $('#main').append(result);
    })
});

$("#btnPontoColeta").click(function () {
    $.get('pontoColeta.html', (result) => {
        $('#main').append(result);
    })
});