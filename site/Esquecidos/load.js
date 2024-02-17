window.addEventListener("load", (event) => {

    $(".navItem").click(function () {
        if (!$(this).data('html')) {
            return;
        }
        $.get($(this).data('html'), (result) => {
            $('main').html(result);
        })
    });


    $('body').on('click', "#btnLogin", function () {
        $.get('login.html', (result) => {
            $('#loginShow').html(result).show();
        });
    });


    $('body').on('click', '.closeModal', (event) => {
        event.preventDefault();
        $('#loginShow').hide();
    })

    $('body').on('click', "#login", function () {
        $.get('indexLogado.html', (result) => {
            $('header').html(result);
        });
        $('#loginShow').hide();

    });


})
