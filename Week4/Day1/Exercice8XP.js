
// partie 1


function makeJuice(size_drink){

    let ingredients = []
    function addIngredients(first_ingredient,second_ingredient,third_ingredient){
        
        ingredients.push(first_ingredient)
        ingredients.push(second_ingredient)
        ingredients.push(third_ingredient)

    }
    

    function displayJuice(){
        let p = document.createElement('p')
        p.textContent = `The client wants a ${size_drink} juice, containing ${first_ingredient}, ${second_ingredient}, ${third_ingredient}`
        document.body.appendChild(p)
    }
    addIngredients('apple', 'banana', 'orange')
    addIngredients('kiwi', 'grape', 'strawberry')
    displayJuice()
}

 
console.log(makeJuice('medium'));
console.log(makeJuice('Large'));





