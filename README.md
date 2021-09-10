# Blog API #

Esse projeto foi desenvolvido para exercitar minhas habilidades em Node.js + Express, MySQL e Sequelize;

### Requisitos necessários para rodar o projeto localmente:

1. Node.js (Versão 14.x para frente)(link: <https://nodejs.org/en/>);
2. MySQL (link: <https://dev.mysql.com/downloads/>);
3. Gerenciador de pacote (npm ou yarn);

### Instruções para iniciar o projeto localmente:

1. Clone o repositório: `git clone git@github.com:TiagoPaz2000/blogAPI.git`.
2. Agora na pasta raiz do projeto, será necessário configurar as variáveis de ambiente:
    - Crie um arquivo com o nome `.env`.
    - Copie e cole o conteúdo do arquivo `.env-example`.
    - Agore edite as variáveis conforme a sua configuração.
3. Execute o comando `npm install` no terminal dentro da pasta raiz do projeto.
4. Agora será necessário rodar os comandos do Sequelize:
    - Execute o comando `npx sequelize db:create` para criar o banco de dados;
    - Execute o comando `npx sequelize db:migrate` para rodar as migrations;
    - Execute o comando `npx sequelize db:seed:all` para popular as tabelas com as informações pré-determinadas nos arquivos de seeds;

### Lista de rotas:
- GET: `/posts`
- GET: `/posts/id`

### Detalhes de cada rotas:
