const express = require('express');

const server = express();

// Para que o express entenda as requisições put e post que trabalham com json
// é necessário dizer a ele que tais requisições trabalham com esse formato
server.use(express.json());

// Query params enviados com interrogação (?) i.e: ?teste=1
// Route params enviados com /. i.e: /users/1
// Request body. Conteúdo das rotas post e put. i.e: { "name": "Adriano", "email": "silva.souza.adriano@gmail.com" }

//CRUD  - Create, Read Update, Delete

const users = ['Adriano', 'Grace Kelly', 'Giampaolo Salvadori'];

// Middleware é basicamente a base de toda aplicação Express
// Middleware é uma função que recebe os parâmetros req e res (podendo receber outros parâmetros)
// executando alguma ação na aplicação, manipulando os dados de requisição e resposta de alguma forma
// Middleares também podem alterar as variáveis req e res

// Criando um middleware global, ou seja, não importando a rota que acessarmos esse middeware
// sempre vai ser chamado. Nesse caso substituiremos server.get, server.post, server.put e server.delete
// por server.use
server.use((req, res, next) => {
  console.time('Request');
  console.log(`Metodo: ${req.method}; URL: ${req.url}`);

  next();

  console.timeEnd('Request');

})

// Criando um middleware local para checar se o user name existe no corpo das
// requisisções post e put. Sua utilização é feita através de um novo parâmetro\
// no métodos a serem validados. Exemplo:
// server.post('/users', checkUserExists, (req, res) => {
function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ "error": "User name not found on request body!"});
  }

  return next();
}

// Local middleware para checar se um usuário exist baseando-no seu índice. Essa
// checagem será necessária para previnir ações desnecessárias nos métodos, get, put e delete
function checkUserInArray(req, res, next) {
  // Variável que subustuira o o index nos métodos que utilizam o user name.
  // Nesse caso somente o get para um únicos usuário
  const user = users[req.params.index]

  if (!user) {
    return res.status(400).json({ "error": "User does not exist!"});
  }

  // Atribuindo o usuário do contexto a req.user
  req.user = user;

  return next();
}

// Local Middle para previnir duplicidade de registros. Nesse caso ela 
// será usada no método post
function checkUserAlreadyExists(req, res, next) {

  const { name } = req.body;
  
  if (users.indexOf(name) > -1) {
    return res.status(400).json({ "error":  `User name ${name} already exist!`});
  }

  return next();
}

// Rota para retornar todos os usuários
server.get('/users', (req, res) => {
  return res.json(users);
})

// Rota para retornar um usuário
server.get('/users/:index', checkUserInArray, (req, res) => {

  //const { index } = req.params;
  //return res.json(users[index]);

  // req.user foi atribuída no Middleware checkUserInArray pois nela
  // já está inserida o parâmetros index
  return res.json(req.user);
})

// Rota para cadastrar um usuário
// Essa rota utilizará o Request body para capturar o usuário a ser cadastrado
// Nesse caso teremos uma propriedade chamada name que deverá vir no corpo da requisição em formato json
server.post('/users', checkUserAlreadyExists, checkUserExists, (req, res) => {
  
  const { name } = req.body;
  
  users.push(name);

  return res.json(users);
  
})

// Rota para editar um usuário
server.put('/users/:index', checkUserInArray, checkUserExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);

})

// Rota para apagar um usuário
server.delete('/users/:index', checkUserInArray, (req, res) => {
  
  const { index } = req.params;

  // Apaga uma posição do vetor, nesse caso baseando-se na variável index
  users.splice(index, 1);

  // Boa prática para rotas de deleção, utilizar o método send que informa se deu tudo certo
  return res.send();
})

server.listen(3000);