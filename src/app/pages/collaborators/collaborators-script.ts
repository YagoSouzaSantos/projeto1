import { Collaborator } from "./models/icollaborator";

async function loadCollaborators(): Promise<void> {
    try {
        const dtPath = await fetch('/db/collaborators.json');


        const data: Collaborator[] = await dtPath.json();

        const collaboratorsList = document.getElementById('collaborators-list') as HTMLDivElement;


        // criação de cards com os dados dos colaboradores utilizando um forEach para não precisar inserir um a um
        data.forEach(collaborator => {
            const card = document.createElement('div');
            card.className = 'collaborator-card';
            card.innerHTML = `
                <img src="${collaborator.imagem}" alt="${collaborator.nome}">
                <h2>${collaborator.nome}</h2>
                <p>Admissão: ${new Date(collaborator.admissao).toLocaleDateString()}</p>
            `;

            // permite capturar evento de click do card para abrir o modal que solicita senha
            card.addEventListener('click', () => {
                showModal(collaborator);
            });

            collaboratorsList.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao carregar colaboradores:', error);
    }
}

// Função para exibir o modal
function showModal(collaborator: Collaborator): void {
    const modal = document.getElementById('password-modal') as HTMLElement;
    const closeModal = document.getElementById('close-modal') as HTMLElement;
    const passwordForm = document.getElementById('password-form') as HTMLFormElement;
    const modalTitle = document.getElementById('modal-title') as HTMLElement;

    modalTitle.textContent = `${collaborator.nome}, informe sua Senha!`;
    modal.style.display = 'block';

    closeModal.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event: MouseEvent) => {
        if ((event.target as HTMLElement) === modal) {
            modal.style.display = 'none';
        }
    };

    // submit do formulário de senha do usuário, este processo é apenas um exemplo, só exibe a mensagem mas não registra um ponto de verdade
    passwordForm.onsubmit = (event: Event) => {
        event.preventDefault();
        const passwordInput = document.getElementById('password') as HTMLInputElement;
        const password = passwordInput.value;

        // validação de senha
        if (validatePassword(password, collaborator.senha)) {
            showSnackbar('Registro efetuado com sucesso', 'success');
            setTimeout(() => {
                window.location.href = '/'; // Redireciona para a página inicial após regitro do ponto
            }, 6000);
            modal.style.display = 'none';
        } else {
            showSnackbar('Senha incorreta!', 'error');
        }        
    };
}

// Função de validação de senha
function validatePassword(inputPassword: string, correctPassword: string): boolean {
    return inputPassword === correctPassword;
}

// Exibe o snackbar para mensagens ao usuário
function showSnackbar(message: string, type: string): void {
    const snackbar = document.getElementById('snackbar') as HTMLElement;
    snackbar.textContent = message;

    snackbar.className = '';
    snackbar.classList.add('show', type); // Adiciona 'show' e o tipo ('success' ou 'error')

    setTimeout(() => {
        snackbar.className = snackbar.className.replace('show', '');
    }, 5000);
}

// Carrega os colaboradores da tela atravez do DOM no carregamento da página
document.addEventListener('DOMContentLoaded', () => {
    loadCollaborators();
});
