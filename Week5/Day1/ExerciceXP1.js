function compareToTen(num){
    return new Promise((resolve,reject)=>{
        if(num<=10){
            resolve("Le nombre est inférieur ou égal à 10");

        }else{
            reject("Le nombre est supérieur à 10");

        }
    })
}
compareToTen(8)
.then(function(message){
     console.log(message);
}
   
    
)
.catch(function(error){
    console.log(error);
    

})

compareToTen(15)
.then(function(message){
    console.log(message);
}
  
   
)
.catch(function(error){
   console.log(error);
   

})