
// function displayNumbersDivisible(){
//     let x = 0
//  for (let i=0 ; i<500 ; i++){
    
//     if(i  % 23 === 0){

//         x+=i 
//     }
  
//  }
// return x
 
// }
//  y = displayNumbersDivisible()
//  console.log(y);
 

function displayNumbersDivisible(x){
     var y = 0
    for (let i = 0 ; i<500 ; i++){
       
        if(i % x == 0){
          y += i
          console.log(i);
           

        }
        
    }
    console.log(` la somme est : ${y}`);
    


}

sumMultiple = displayNumbersDivisible(2)
console.log(sumMultiple);



