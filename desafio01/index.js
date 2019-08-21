const express = require('express');

const server = express();

server.use(express.json());

// This variable will store the number of request to be showed on console
// Also the use of let was because the content of variable will be mutated
let numberOfRequests = 0;

/*
  This variable will store projects information on this format

  { id: "1", title: 'Novo projeto', tasks: [] }
*/
const projects = []


/**
 * Middleware que checa se o projeto existe. Será utilizada no método POST de tarefas
*/
function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: 'Project not exist' });
  }

  return next();
}

/**
 * Middleware que checa se o projeto já existe. Será utilizada no método POST de projetos
*/
function checkProjectAlreadyExists(req, res, next) {
  const { id } = req.body;
  const project = projects.find(p => p.id == id);

  if (project) {
    return res.status(400).json({ error: 'Project already exist' });
  }

  return next();
}

/**
 * Middleware que dá log no número de requisições
 */
function logRequests(req, res, next) {
  numberOfRequests++;

  console.log(`Número de requisições: ${numberOfRequests}`);

  return next();
}

server.use(logRequests);

// - `GET /projects`: Rota que lista todos projetos e suas tarefas;
server.get('/projects', (req, res) => {
  return res.json(projects);
})

/*
  - `POST /projects`: A rota deve receber `id` e `title` dentro corpo de cadastrar
  um novo projeto dentro de um array no seguinte formato:
  `{ id: "1", title: 'Novo projeto', tasks: [] }`;
  Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com àspas duplas.
*/
server.post('/projects', checkProjectAlreadyExists, (req, res) => {
  const {id, title} = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(project)
})

/*
- `POST /projects/:id/tasks`: A rota deve receber um campo `title` e armazenar uma nova tarefa no 
  array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;
*/
server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
});

/*
- `PUT /projects/:id`: A rota deve alterar apenas o título do projeto com o `id` 
presente nos parâmetros da rota;
*/
server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);

})

/*
- `DELETE /projects/:id`: A rota deve deletar o projeto com o `id` presente nos parâmetros da rota;
*/
server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  
  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.send();

})





server.listen(3000);