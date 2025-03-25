
array = [0.25 ,0.10,0.05,0.01]
function changeEnough(itemPrice, amountOfChange){


   let sum = 0
for (let i = 0 ; i<array.length ; i++){
    sum += array[i]*amountOfChange[i]
}

    if(itemPrice<=sum){
        return true
    }
    else{
        return false
    }


}
console.log(changeEnough(9,[25, 20, 5, 0]));
console.log(changeEnough(8,[25, 20, 5, 0]));
console.log(changeEnough(4.5,[25, 20, 5, 0]));
console.log(changeEnough(14.11, [2,100,0,0]))
console.log(changeEnough(0.75, [0,0,20,5]))
