import express from "express";
import db from "./config/dbConnect.js"
import livros from "./models/Livro.js"
import autoress from "./models/Autor.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro ao conectar com a base de dados'))
db.once("open", () =>{
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json())
routes(app);

export default app