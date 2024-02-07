$(() => {    
    $.get('index.html', (result) => {
        $('main').append(result);
    })
});

