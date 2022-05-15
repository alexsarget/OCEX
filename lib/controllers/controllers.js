const Reader=require("./../utils/Reader");
const animalconsult=require("./../services/animalconsult")

class animals{
    static getAnimals(id){
        const animales=Reader.sendData("animales.json");
        const animalById = animalconsult.filterById(animales,id)
        return animalById;

    }
}
module.exports=animals

