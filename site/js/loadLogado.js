$(".navItem").click(function () {
    if (!$(this).data('html')) {
        return;
    }
    $.get($(this).data('html'), (result) => {
        $('main').html(result);
    })
});


