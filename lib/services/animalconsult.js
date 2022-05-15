class animalconsult{
    static filterById(animals, id){
        const AnimalById = animals.filter((animal) => animal.id == id);
        return AnimalById;
    }

}
module.exports=animalconsult