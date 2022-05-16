const animal = require("./controllers/controllers");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/v1/animales", (request, response) => {
    const animals=animal.AllAnimals();
    response.json(animals);
});

app.get("/v1/animales/:id", (request, response) => {
    const id=request.params.id;
    const animalbyId=animal.getAnimals(id.toLowerCase());
    response.json(animalbyId);
});

app.get("/v1/animales/:id", (request, response) => {
    const id=request.params.id;
    const animalbyId=animal.getAnimals(id);
    response.json(animalbyId);
});

app.post("/v1/animales", (req, res)=>{
    console.log(`Api animals POST request ${new Date()}`)
    const requestBody=req.body//
    res.status(201).json({message:"Created"})
});
app.put('/v1/animales/:id', (req,res)=>{
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const  requestBody=req.body//Parametros de un  animal
    res.status(200).json({message:"Updated"})
})

app.delete('/v1/animales/:id',(req,res)=>{
    console.log(`Api Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody=req.body//
    res.status(200).json({message:"Deleted"})
})


app.listen(port, () => {
    console.log(`Animal API in localhost:${port}`);
});