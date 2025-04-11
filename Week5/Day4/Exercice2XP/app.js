import  {people}  from "./data.js";


function averageAge(){
    let age = 0;
   people.forEach(person=>{
        age += person.age

   })
   console.log(age / people.length);

}
averageAge();
 