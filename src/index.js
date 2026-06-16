// importando o modulo express
import express from "express";
import dotenv from "dotenv";

// confirando as configurações do dotenv
dotenv.config();

// inicialiazar a aplicação express, construir a aplicação
const app = express();

// todo server tem uma porta ou portas
const port = process.env.PORTA;

const produtos = [
  // primeiro produto
  {
    id: 1,
    nome: "Pipoca",
    preco: 4.0,
  },
  
  // segundo produto
  {
    id: 2,
    nome: "Coxinha",
    preco: 5.0,
  },
];

// rota raiz da aplicação
app.get("/", (requisicao, resposta) => {
  try {
    resposta.status(200).json(produtos)
  } catch (error) {
    resposta.status(500).json({mensagem: "Erro ao listar os produtos!"})
  }
});

// Mikael
app.get("/login", (requisicao, resposta) => {
  resposta.send("Usuário autenticado");
});

// aplicação com rota get, retornando como resposta um hello word
app.get("/teste", (requisicao, resposta) => {
  resposta.send("Teste");
});

// minha aplicação ouvindo a porta 3000
app.listen(port, () => {
  console.log(`Servidor executando em http://localhost:${port}`);
});
