document.addEventListener('DOMContentLoaded', function() {
    // Função para carregar conteúdo com base no hash da URL
    function loadContent() {
        const hash = 'header'; // Página padrão é 'home'

        fetch(`${hash}.html`)
            .then(response => response.text())
            .then(content => {
                document.getElementById('headerpadrao').innerHTML = content;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
    }

    // Carregue o conteúdo na inicialização e sempre que o hash da URL mudar
    window.addEventListener('hashchange', loadContent);
    loadContent();
});