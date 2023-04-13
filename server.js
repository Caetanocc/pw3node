const express = require("express");
const server = express();
const port = 4000;

let dados = require("./dados")

//começar a criar API.REST

server.get("/", (req,res) =>{
    res.sendFile(__dirname + "/index.html")
})

server.get("/pegar", (req,res) => {
    res.json(dados)
})

server.get("/pegar/:id", (req,res) => {
    const itemId = req.params.id
    const item = dados.find(_item => _item.id===itemId)

    if (item){
        res.json(item)
    } else {
        res.json( {message: `item ${itemId} não existe`})
    }
})


server.listen(port, () =>{
    console.log(`Listening at ${port}`);
})
