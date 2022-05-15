const fs =require('fs');

class Reader{
    static sendData(file){
        const rawData=fs.readFileSync(file);
        return JSON.parse(rawData);
    }
}

module.exports = Reader;