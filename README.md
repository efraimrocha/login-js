# Documentação do Projeto - API To-Do List nodejs

## Introdução
Bem-vindo ao repositório da API To-Do List! Este projeto consiste em desenvolver um backend utilizando Node.js, Express, e MySQL para suportar um aplicativo de lista de tarefas (to-do list). Esta documentação fornecerá informações essenciais sobre como configurar, executar e entender a API.

Pré-requisitos
Antes de começar, certifique-se de ter os seguintes componentes instalados em sua máquina:

* Node.js
* Docker
* Git
* 
Configuração do Ambiente com Docker
Clone o repositório:

bash
Copy code
git clone https://github.com/seu-usuario/to-do-list-api.git
Navegue até o diretório do projeto:

bash
Copy code
cd to-do-list-api
Crie um arquivo .env na raiz do projeto para configurar as variáveis de ambiente:

env
Copy code
DB_HOST=localhost
DB_USER=seu-usuario
DB_PASSWORD=sua-senha
DB_DATABASE=nome-do-banco
Execute o MySQL em um container Docker:

bash
Copy code
docker-compose up -d
Instale as dependências:

bash
Copy code
npm install
Execute as migrações do banco de dados:

bash
Copy code
npm run migrate
Executando a API
Após a configuração do ambiente, você pode iniciar o servidor da API:

bash
Copy code
npm start
A API estará disponível em http://localhost:3000 por padrão.
