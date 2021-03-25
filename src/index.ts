//Imports necessários
import express from "express";
import bodyParser  from "body-parser";
import cors from "cors";
import routes from "./todo/todoController";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get("/",(req , res)=>{
    res.send("Rota principal")
})

app.use(routes)

const url = "mongodb+srv://ggibamede:1234@cluster0.1pebv.mongodb.net/todo?retryWrites=true&w=majority"

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
};

mongoose.connect(url , connectionParams).then(()=>{
    console.log("Conectado ao banco de dados")
}).catch(()=>{
    console.error("Ocorreu um erro na conexão")
})

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log("Servidor rodando no link : http://localhost:"+PORT)
})
