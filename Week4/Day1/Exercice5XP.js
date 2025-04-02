
// 1)
function convertToGram(poids){
   return poids*1000

}

// 2)
console.log(convertToGram(20));
// 3)
// La déclaration de fonction est une fonction nommée définie avant son appel, tandis que l'expression de fonction est une fonction anonyme assignée à une variable et ne peut être appelée qu'après sa définition.

const kgToGramme = kg => kg*1000;

console.log( kgToGramme(5));
