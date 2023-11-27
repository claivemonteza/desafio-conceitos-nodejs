const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
let repository = { id: 1, title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }

const repositores = [repository];

app.get('/repositories', (req, res) => {
    res.json(repositores);
});

app.post('/repositories', (req, res) => {
  const dados = req.body;
  repositores.push(dados);
  res.json({ mensagem: 'Repositorio registrado com sucesso', dados });
});


app.put('/repositories:id', (req, res) => {
  const dados = req.body;
  const repository = repositores.find(x=>x.id==req.params.id);
  if(repository === undefined){
    res.json({ mensagem: 'Repositorio não encontrado', dados });
  }
  repository.title = dados.title;
  repository.techs = dados.techs;
  repository.url = dados.url;
  repository.likes=dados.likes;

  res.json({ mensagem: 'Repositorio actulizado com sucesso', repository });
});

app.delete('/repositories/:id', (req, res) => {
  const dados = req.body;
  const indexOf = repositores.findIndex(x=>x.id==req.params.id);
  if(indexOf === -1){
    res.json({ mensagem: 'Repositorio não encontrado', dados });
  }
  repositores.splice(indexOf,1);
  res.json({ mensagem: 'Repositorio removido com sucesso', dados });
});

app.post('/repositories/:id/like', (req, res) => {
  const dados = req.body;
  const repository = repositores.find(x=>x.id==req.params.id);
  if(repository === undefined){
    res.json({ mensagem: 'Repositorio não encontrado', dados });
  }

  repository.likes++;
  res.json({ mensagem: 'Foi feito like no repositorio', repository });
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
