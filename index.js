const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Imagine aqui uma foto do Romeu Giga Chad!')
});

app.listen(3000, () => {
  console.log('server started');
});
