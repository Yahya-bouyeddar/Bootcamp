const prompt = require("prompt-sync")()


function hotelCost(nuits){
    
    while (isNaN(nuits) || nuits==" " ||nuits=="") {
        
        nuits = prompt("Veuillez entrer le nombre de nuits:")

    }
    let sum = nuits*140
    
  return sum
    
}
// console.log(hotelCost());

function planeRideCost(destination){
    while(destination.trim() === "" || !isNaN(destination)){
        destination = prompt('donner moi votre destination')
    }

    if(destination === "Londres"){
        return  183
    }
    else if(destination=='Paris'){
         return  220

    }else {
        return 300
    }

}

function  rentalCarCost(days){
    while (isNaN(days) || days==" " ||days=="") {
        
        days = prompt("Veuillez entrer le nombre de nuits:")

    }
    if(days<=10){
        return days*40
    }else{
        return (days*40)-(days*40)*0.05
    }

}


function totalVacationCost() {
let nuits = prompt("Veuillez entrer le nombre de nuits:");
let destination = prompt('donner moi votre destination')
let days = prompt("Veuillez entrer le nombre de jours vous voulez louer la voiture:");


const hotelPrice = hotelCost(nuits);
const planePrice = planeRideCost(destination);
const carPrice = rentalCarCost(days);
const totalCost = hotelPrice + planePrice + carPrice;
console.log(`Prix de l'hôtel : ${hotelPrice} $`);
console.log(`Prix du vol : ${planePrice} $`);
console.log(`Prix de la voiture : ${carPrice} $`);
console.log(`Coût total des vacances : ${totalCost} $`);
return totalCost;
    
}
totalVacationCost()