var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loadCollaborators() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dtPath = yield fetch('/db/collaborators.json');
            const data = yield dtPath.json();
            const collaboratorsList = document.getElementById('collaborators-list');
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
        }
        catch (error) {
            console.error('Erro ao carregar colaboradores:', error);
        }
    });
}
// Função para exibir o modal
function showModal(collaborator) {
    const modal = document.getElementById('password-modal');
    const closeModal = document.getElementById('close-modal');
    const passwordForm = document.getElementById('password-form');
    const modalTitle = document.getElementById('modal-title');
    modalTitle.textContent = `${collaborator.nome}, informe sua Senha!`;
    modal.style.display = 'block';
    closeModal.onclick = () => {
        modal.style.display = 'none';
    };
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
    // submit do formulário de senha do usuário, este processo é apenas um exemplo, só exibe a mensagem mas não registra um ponto de verdade
    passwordForm.onsubmit = (event) => {
        event.preventDefault();
        const passwordInput = document.getElementById('password');
        const password = passwordInput.value;
        // validação de senha
        if (validatePassword(password, collaborator.senha)) {
            showSnackbar('Registro efetuado com sucesso', 'success');
            setTimeout(() => {
                window.location.href = '/'; // Redireciona para a página inicial após regitro do ponto
            }, 6000);
            modal.style.display = 'none';
        }
        else {
            showSnackbar('Senha incorreta!', 'error');
        }
    };
}
// Função de validação de senha
function validatePassword(inputPassword, correctPassword) {
    return inputPassword === correctPassword;
}
// Exibe o snackbar para mensagens ao usuário
function showSnackbar(message, type) {
    const snackbar = document.getElementById('snackbar');
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
export {};
