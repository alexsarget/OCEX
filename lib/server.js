const animal = require("./controllers/controllers");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/v1/animales/:id", (request, response) => {
    const id=request.params.id;
    const animalbyId=animal.getAnimals(id);
    response.json(animalbyId);
});


app.listen(port, () => {
    console.log(`Animal API in localhost:${port}`);
});