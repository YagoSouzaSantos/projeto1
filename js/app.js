// Função para navegar entre as páginas
function navigateTo(page) {
    // URL do componente HTML
    const url = `app/pages/${page}.html`;
    
    // Faz a requisição para obter o conteúdo HTML
    fetch(url)
        .then(response => response.text())
        .then(html => {
            // Carrega o conteúdo HTML no container
            document.getElementById('app-container').innerHTML = html;
        })
        .catch(error => {
            console.error('Erro ao carregar a página:', error);
        });
}

// Carrega a página inicial por padrão
window.onload = function() {
    navigateTo('home');
};
