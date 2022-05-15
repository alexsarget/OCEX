const animal=require("./controllers")
const Reader=require("./../utils/reader");
const consult=require("./../services/animalconsult")


const animales=Reader.readJsonFile("animales.json");
const consults=consult.filterById(animales,"totoaba");

console.log(animales)