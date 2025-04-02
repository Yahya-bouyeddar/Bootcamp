const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
// result
// ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

const country = "USA";
console.log([...country]);
// => il decoupe usa en lettre et l'affecte a un tableau vide 

let newArray = [...[,,]];
console.log(newArray);