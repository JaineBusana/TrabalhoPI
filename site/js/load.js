$(".navItem").click(function () {
    $.get($(this).data('html'), (result) => {
        $('main').html(result);
    })
});


    $("#btnLogin").click(function () {
        $.get('login.html', (result) => {
            $('menu.html').html(result);
        })
    
    
    });

  

