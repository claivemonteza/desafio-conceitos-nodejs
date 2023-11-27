const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());


app.get('/repositories', (req, res) => {
    res.json({ mensagem: `Você forneceu o parâmetro: ${parametro}` });
});

app.post('/:repository', (req, res) => {
  const dados = req.body;
  res.json({ mensagem: 'Dados recebidos com sucesso', dados });
});


app.put('/:repository/:id', (req, res) => {
  const dados = req.body;
  res.json({ mensagem: 'Dados recebidos com sucesso', dados });
});

app.delete('/:repository/:id', (req, res) => {
  const dados = req.body;
  res.json({ mensagem: 'Dados recebidos com sucesso', dados });
});

app.post('/:repository/:id/like', (req, res) => {
  const dados = req.body;
  res.json({ mensagem: 'Dados recebidos com sucesso', dados });
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});