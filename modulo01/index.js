const express = require('express');

const server = express();

// Query params enviados com interrogação (?) i.e: ?teste=1
// Route params enviados com /. i.e: /users/1
// Request body. Conteúdo das rotas post e put. i.e: { "name": "Adriano", "email": "silva.souza.adriano@gmail.com" }

// localhost:3000/teste
server.get('/teste', (req, res) => {
  
  //return res.send('Hello World!');
  return res.json({ message: 'Hello World!'});
})

// exemplo com query params
// localhost:3000/teste1?nome=Adriano
server.get('/teste1', (req, res) => {

  const nome = req.query.nome;
  
  //return res.send('Hello World!');
  return res.json({ message: `Hello ${nome}`});
})

// exemplo com route params
// localhost:3000/users/1
server.get('/users/:id', (req, res) => {

  //const id = req.params.id;
  const { id } = req.params;
  
  //return res.send('Hello World!');
  return res.json({ message: `Buscando o usuário com id ${id}`});
})

server.listen(3000);