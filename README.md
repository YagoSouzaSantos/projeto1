# Projeto1 Cartão de Ponto Eletrônico
Restic36 - Apresentação projeto 1 - Unidade 03

# Descrição do projeto
A aplicação básica simula um cartão de ponto eletrônico dividido em duas telas, a primeira uma tela inicial de apresentação e a segunda contém a lista de colaboradores da empresa, o usuário deve selecionar seu cadastro de colaborador e então digitar a senha para confirmar o registro de ponto. Em caso de sucesso (validação de senha) é retornada uma mensagem de sucesso e o sistema retorna para a página inicial, em caso de erro o sistema retornará senha inválida.

**Observações:**
+ Como ainda não foi tema de estudo coisas relacionadas ao uso de api, backend ou banco foquei em utilizar coisas que foram apresentadas no curso até agora, então, apenas para melhor funcionamento da página coloquei um arquivo .json com o cadastro dos colaboradores em `/db/collaborators.jon` para poder consultar dados de alguma forma e validar uma senha. Em um cenário real consumiria uma api de verdade.

# Instruções de como executar a aplicação.

## Pré-requisitos
- Node.js instalado

## Passos para executar após clonar o projeto
1. Caso o TypeScript ainda não esteja instalado globalmente no seu computador, será necessário instalá-lo. A instalação pode ser realizada através do comando abaixo executado no terminal.\
```npm install -g typescript```
2. Instale um Servidor HTTP Local para evitar problemas relacionados ao CORS. Caso não execute o comando abaixo a transição entre as páginas 01 e 02 provavelmente não acontecerá.\
```npm install -g http-server ```
3. Compile os Arquivos TypeScript através do comando abaixo.\
```tsc```
4. Inicie o servidor HTTP no diretório raiz do projeto\
```http-server``` ou também pode utilizar ```npx http-server```
5. Inicie o projeto em `http://127.0.0.1:8080` (talvez seu computador acabe utilizando outra porta, basta conferir no terminal assim que utilizar o comando `http-server`.

# Tecnologias utilizadas
Este projeto utiliza tecnologias como **HTML**, **CSS** e **TypeScript** para estruturar, estilizar e adicionar interatividade a página.\ 
O TypeScript, uma versão tipada do JavaScript, permite um desenvolvimento menos propenso a erros.\
A ferramenta **http-server** é empregada para servir os arquivos localmente, facilitando o desenvolvimento e os testes, sem ela não poderíamos navegar entre as páginas de maneira eficaz, além de facilitar a estruturação do projeto pois podemos quebrar a aplicação em diversas páginas que interagem entre si. \
O projeto faz uso de arquivos **JSON** para simular um banco de dados local, permitindo a consulta de dados de forma simplificada já que não possuímos um backend real.

# Melhorias futuras
+ Implementar um sistema de autenticação mais seguro baseado na comunicação com dispositivos como leitor de digitais por exemplo.
+ Substituir o uso de arquivos JSON locais por um banco de dados real (como Firebase, MongoDB ou PostgreSQL) para armazenar dados de colaboradores.
+ Melhorar a Interface de usuário através do **Angular** junto ao **Material-UI** para melhorar a experiência do usuário.
+ Adicionar relatórios e histórico de pontos batidos para consulta.
