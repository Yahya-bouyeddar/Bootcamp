class Animal {
    constructor(name,type,color){
        this.name = name
        this.type = type 
        this.color = color
    }
}
class Mammal extends Animal{
    sound(bruit){
        console.log(`${bruit} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`);
        
    }
}

farmerCow = new Mammal("lily","cow","brown and white")

farmerCow.sound('moooo')