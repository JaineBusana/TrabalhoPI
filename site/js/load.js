$(() => {    
    $.get('menu.html', (result) => {
        $('header').append(result);
    })
});