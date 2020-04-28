"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class JSONFileManager {
    constructor(fileName) {
        this.fileName = fileName;
    }
    writeObjectToFile(objectToSave) {
        fs.writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 2));
    }
    getObjectFromFIle() {
        return JSON.parse(fs.readFileSync(this.fileName).toString());
    }
}
exports.JSONFileManager = JSONFileManager;
//# sourceMappingURL=JSONFileManager.js.map