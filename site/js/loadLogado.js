$(".navItemLogado").click(function () {
    if (!$(this).data('html')) {
        return;
    }
    $.get($(this).data('html'), (result) => {
        $('main').html(result);
    })

    $('body').on('click', ".btnProfilePicture", function () {
        $('.modalProfilePicture').css('display', 'flex');
    });
});
