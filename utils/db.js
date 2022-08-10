const {readFile, writeFile} = require('fs').promises
const {join} = require('path')
const {v4: uuid} = require ('uuid')

class Db{
    constructor(dbFileName) {
        this.dbFileName = join(__dirname, '../data', dbFileName)
        this._load()
    }

    async _load() {
        this._data = JSON.parse(await readFile(this.dbFileName,'utf8'));
    }
    _save(){
        writeFile(this.dbFileName, JSON.stringify(this._data), 'utf8')
    }

    create(obj){
        this._data.push({
            id: uuid(),
            ...obj,})
        this._save();
    }

    getAll(){
        return this._data;
    }

    getOne(id){
        return this._data.find(oneObj => oneObj.id === id)
    }
    update(id, newObj){
        this._data = this._data.map(oneObj =>(
            oneObj.id === id ? {
                  ...oneObj,
                  ...newObj,
                }: oneObj
            // paramters from oneObj are replaced by parametrs from newObj
        ));
        this._save();
    }

    delete(id){
        this._data = this._data.filter(oneObj =>  oneObj.id === !id);
        // return us new array without id which we give inside delete function
        this._save();
    }
}

const db = new Db('client.json');

module.exports = {
    db,
}