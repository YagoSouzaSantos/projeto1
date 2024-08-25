// Função para redirecionar página
function setupRedirect(buttonId: string, redirectUrl: string): void {
    document.addEventListener('DOMContentLoaded', () => {
        const button = document.getElementById(buttonId) as HTMLButtonElement;

        if (button) {
            button.addEventListener('click', () => {
                window.location.href = redirectUrl;
            });
        } else {
            console.error(`Botão com ID "${buttonId}" não encontrado.`);
        }
    });
}

// Rotas definidas de acordo com ID dos botões de redirecionamento assim se no futuro tiver outras rotas utilizo a mesma função
setupRedirect('collaborators-area', 'src/app/pages/collaborators/collaborators.html');

