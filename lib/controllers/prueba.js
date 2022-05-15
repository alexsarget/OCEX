const animal=require("./controllers")
const Reader=require("./../utils/reader");
const consult=require("./../services/animalconsult")


const animales=Reader.sendData("animales.json");
const consults=consult.filterById(animales,"totoaba");

console.log(consults.length)