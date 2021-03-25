import express, { Router } from "express";
const routes = express.Router();

const Todo = require("./todo");

//Criação de Todos
routes.post("/createTodo", async (req , res)=>{
    const todo = new Todo({
        description: req.body.description
    });

    const savedTodo = await todo.save();
    res.json(savedTodo);

})
//Listagem de Todos
routes.get("/listTodo", async (req, res)=>{
    const todo =  await Todo.find();
    res.json(todo)
    
})
//Listagem de Todos por ID
routes.get("/listTodo/:id", async (req , res)=>{
    const todo = await Todo.find({_id : req.params.id});
    if (todo == "") {
        res.send("O todo não foi encontrado")
    }else{
        res.json(todo)
    }
})

//Atualização de Todos
routes.post("/updateTodo/:id", async (req, res)=>{
    const todo = await Todo.updateOne({_id : req.params.id}, {
       $set:{
            isCompleted: true
        }
    })
    res.send(todo)
})

//Delete de Tddos
routes.post("/deleteTodo/:id",async (req , res)=>{
    const todo = await Todo.deleteOne({_id : req.params.id});
    const id = req.params.id;
    res.json(`A tarefa com o ID ${req.params.id} foi deletada com sucesso`)
})

export default routes;
