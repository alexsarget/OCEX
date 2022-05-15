const Reader = require('./../../lib/utils/Reader')
// Reader
describe('Pruebas de Reader Storyscroll', () => {
    test('1. Test de prubea', () => {
        const jsonFile = 'animales.json'
        const readFile = Reader.readJsonFile(jsonFile)

        expect(readFile.length).toBe(10);
    })
})
