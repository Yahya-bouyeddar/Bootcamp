// 1)
// [2] === [2]  => false
// {} === {}  => false


// 2)

class Animal{
    constructor(name,color,type ){
        this.name = name
        this.color = color
        this.type = type
    }
}
class Mammal extends Animal
    { sound(bruit){
        
        return(` ${bruit} I'm a ${this.type}, named ${this.name} and I'm ${this.color}` );
        
        
    }     
    }
    


const farmerCow = new Mammal("Lily", "cow", "brown and white")
console.log(farmerCow.sound("Moooo"));

