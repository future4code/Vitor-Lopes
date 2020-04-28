import * as fs from 'fs'


export class JSONFileManager {

  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName
  }
  writeObjectToFile(objectToSave: Object) {
    fs.writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 2))
  }

  getObjectFromFIle(): Object {
    return JSON.parse(fs.readFileSync(this.fileName).toString());
  }
}
