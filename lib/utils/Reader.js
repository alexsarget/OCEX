const fs = require("fs");
class Reader {

    static readJsonFile(filePath) {
        const rawdata = fs.readFileSync(filePath);
        const explorers = JSON.parse(rawdata);
        return explorers;
    }
}

module.exports = Reader; 