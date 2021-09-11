
# Blog API #

Esse projeto foi desenvolvido para exercitar minhas habilidades em Node.js + Express, MySQL e Sequelize;

### Requisitos necessários para rodar o projeto localmente:

1. Node.js (Versão 14.x ou superior)(link: <https://nodejs.org/en/>);
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
    - Execute o comando `npx sequelize db:create` para criar o banco de dados.
    - Execute o comando `npx sequelize db:migrate` para rodar as migrations.
    - Execute o comando `npx sequelize db:seed:all` para popular as tabelas com as informações pré-determinadas nos arquivos de seeds.
5. Use `npm start` para executar o projeto, ou use `npm run dev` para executar usando o nodemon.

### Lista de rotas :
	    - GET: `/posts`
	    - GET: `/posts/id`
	    - POST: `/posts/create`
	    - DELETE: `/posts/delete/:id`
	    - PUT: `/posts/update/:id`
	    - POST: `/user/create`
	    - GET: `/login`
	    - POST: `/rating/add/:id`
	    - DELETE: `/rating/delete/:id`

### Detalhes de cada rotas :

	1. GET: /posts - Retorna todos os posts disponíveis:
		    
        - formato JSON retornado:
           [
	          {
	            "id": 1,
	            "title": "Xadrez: Dicas sobre o jogo",
	            "categorie": "jogos",
	            "rating": 2,
	            "content": "Dicas quentes para você arrebentar com o adversário",
	            "urlImage": "/temp/uploads/xadrez.jpg",
	            "createdAt": "2021-09-06T22:19:13.000Z",
	            "updatedAt": "2021-09-06T22:19:13.000Z"
	          },
	          {
	            "id": 2,
	            "title": "Como tirar nota 1000 no Enem",
	            "categorie": "escola",
	            "rating": 4,
	            "content": "Dicas para você que apenas dormia na sala de aula :)",
	            "urlImage": "/temp/uploads/enem.jpeg",
	            "createdAt": "2021-09-06T22:19:13.000Z",
	            "updatedAt": "2021-09-06T22:19:13.000Z"
	          }
	       ]
	  
	2. GET: `/posts/id` - Retorna o post com o id equivalente:
	
	    - formato JSON retornado:
           {
			  "id": 1,
			  "title": "Xadrez: Dicas sobre o jogo",
			  "categorie": "jogos",
			  "rating": 2,
			  "content": "Dicas quentes para você arrebentar com o adversário",
			  "urlImage": "/temp/uploads/xadrez.jpg",
			  "createdAt": "2021-09-06T22:19:13.000Z",
			  "updatedAt": "2021-09-06T22:19:13.000Z"
			}
			
	3. POST: `/posts/create` - Criação de um novo post:
		
		- estrutura esperada:
			body:
			  - title;
			  - categorie;
			  - content;
			  - file (type: jpeg, pjpeg, png, jpg);
			bearer Token: 
			  - Token;
			  
	    - formato JSON retornado:
           {
			  "post": {
			    "id": 3,
			    "title": "Lorem Ipsum",
			    "categorie": "Lorem Ipsum",
			    "rating": 1,
			    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			    "urlImage": "/temp/uploads/1631310545750-loremipsum.jpg",
			    "updatedAt": "2021-09-10T21:49:05.766Z",
			    "createdAt": "2021-09-10T21:49:05.766Z"
			  }
			}
	
	4. DELETE: `/posts/delete/:id` - Deleta o post com o id equivalente:
		- estrutura esperada:
			bearer Token: 
			  - Token;	
	 
	    - formato JSON retornado:
		    {
			  "message": {
			    "code": 401,
			    "message": "You dont have authorization"
			  }
			}
	
	6. PUT: `/posts/update/:id` - Atualizada o post com o id equivalente:
			
		- estrutura esperada:
			body:
			  - title;
			  - categorie;
			  - content;
			  - file (type: jpeg, pjpeg, png, jpg);
			bearer Token: 
			  - Token;
			  
	    - formato JSON retornado:
           {
			  "post": {
			    "id": 3,
			    "title": "Lorem Ipsum",
			    "categorie": "Lorem Ipsum",
			    "rating": 1,
			    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			    "urlImage": "/temp/uploads/1631310545750-loremipsum.jpg",
			    "updatedAt": "2021-09-10T21:49:05.766Z",
			    "createdAt": "2021-09-10T21:49:05.766Z"
			  }
			}

	7. POST: `/user/create` - Criação de um novo usuário:
			
		- estrutura esperada:
			body:
			  - firstName;
			  - lastName;
			  - email;
			  - password;
			  
	    - formato JSON retornado:
           {
			  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImZpcnN0TmFtZSI6Implbm4iLCJsYXN0TmFtZSI6ImJhcmJvc2EiLCJlbWFpbCI6Implbm5AZW1haWwuY29tIiwicm9sZSI6InVzZXIiLCJ1cGRhdGVkQXQiOiIyMDIxLTA5LTA1VDIxOjM5OjMxLjExMFoiLCJjcmVhdGVkQXQiOiIyMDIxLTA5LTA1VDIxOjM5OjMxLjExMFoiLCJpYXQiOjE2MzA4Nzc5NzEsImV4cCI6MTYzMDk2NDM3MX0.yKicIv4TkcewMbbM0-aHpUW7beJmS3tETz0nG0hXGv8"
			}
			
	8. GET: `/login` - Login:
			
		- estrutura esperada:
			basic auth (body):
			  - email;
			  - password;
			  			  
	    - formato JSON retornado:
           {
			  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImZpcnN0TmFtZSI6Implbm4iLCJsYXN0TmFtZSI6ImJhcmJvc2EiLCJlbWFpbCI6Implbm5AZW1haWwuY29tIiwicm9sZSI6InVzZXIiLCJ1cGRhdGVkQXQiOiIyMDIxLTA5LTA1VDIxOjM5OjMxLjExMFoiLCJjcmVhdGVkQXQiOiIyMDIxLTA5LTA1VDIxOjM5OjMxLjExMFoiLCJpYXQiOjE2MzA4Nzc5NzEsImV4cCI6MTYzMDk2NDM3MX0.yKicIv4TkcewMbbM0-aHpUW7beJmS3tETz0nG0hXGv8"
			}
	
	9. POST: `/rating/add/:id` - Criação de rating:
			
		- estrutura esperada:
			bearer Token: 
			  - Token;
			  			  
	    - formato JSON retornado:
			{
			  "ratingPost": {
			    "PostId": "1",
			    "UserId": 1,
			    "updatedAt": "2021-09-11T00:42:32.673Z",
			    "createdAt": "2021-09-11T00:42:32.673Z"
			  }
			}
			
	10. DELETE: `/rating/delete/:id` - Deleta rating:
			
		- estrutura esperada:
			bearer Token: 
			  - Token;
			  			  
	    - formato JSON retornado:
			{
			  "deletedRating": "1"
			}
