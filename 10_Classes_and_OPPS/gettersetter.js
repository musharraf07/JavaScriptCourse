class Animal{
    constructor (name){
        this._name = name
    }

    
    get name(){
        return this._name.toUpperCase()
    }

    set name(value){
         this._name = value
    }
}


const a = new Animal("Cat")

console.log(a.name);