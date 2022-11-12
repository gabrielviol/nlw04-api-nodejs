import 'reflect-metadata'
import express from 'express';
import "./database"

const app = express();
 /**
  * GET => Busca
  * POST => Salvar
  * PUT => Alterar
  * DELETE => Deletar
  * PATCH => Alteração especifica
  */

app.get("/", (request, response) => {
    return response.send("Hello World")
});

app.post("/", (request, response) => {
    return response.json({message: "Os dados foram salvos!"});
})


app.listen(3333, () => console.log("Server is running!"));