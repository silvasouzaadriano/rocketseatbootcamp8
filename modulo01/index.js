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

// Rota para retornar todos os usuários
server.get('/users', (req, res) => {
  return res.json(users);
})

// Rota para retornar um usuário
server.get('/users/:index', (req, res) => {

  const { index } = req.params;
  
  return res.json(users[index]);
})

// Rota para cadastrar um usuário
// Essa rota utilizará o Request body para capturar o usuário a ser cadastrado
// Nesse caso teremos uma propriedade chamada name que deverá vir no corpo da requisição em formato json
server.post('/users', (req, res) => {
  
  const { name } = req.body;
  
  users.push(name);

  return res.json(users);
  
})

// Rota para editar um usuário
server.put('/users/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);

})

// Rota para apagar um usuário
server.delete('/users/:index', (req, res) => {
  
  const { index } = req.params;

  // Apaga uma posição do vetor, nesse caso baseando-se na variável index
  users.splice(index, 1);

  // Boa prática para rotas de deleção, utilizar o método send que informa se deu tudo certo
  return res.send();
})

server.listen(3000);