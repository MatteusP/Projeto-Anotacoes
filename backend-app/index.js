// index.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Adicione suas configurações e rotas aqui

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/anotacoes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


