const Reader=require("./../utils/Reader");
const animalconsult=require("./../services/animalconsult")

class animals{

    static AllAnimals(){
        const animales=Reader.readJsonFile("animales.json");
        return animales;
    }

    static getAnimals(id){
        const animales=Reader.readJsonFile("animales.json");
        const animalById = animalconsult.filterById(animales,id)
        return animalById;

    }
}
module.exports=animals

