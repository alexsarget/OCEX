const Reader = require("../../lib/utils/reader")
const animalconsult = require("../../lib/services/animalconsult")
describe('Pruebas de Reader Storyscroll', () => {
    test('1. Test de prubea', () => {
        const Reader = "Soy el Test";

        expect(Reader).toBe("Soy el Test");
    });

    test('2. Test de consulta de animales por id', () => {
        const animales = Reader.readJsonFile("animales.json");
        const animalById = animalconsult.filterById(animales, "totoaba")
        animalById.stringify();
        expect(animalById).toEqual("totoaba");
    })
})
