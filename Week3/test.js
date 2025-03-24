let names= ["john", "sarah", 23, "Rudolf",34]
for (i=0 ;  i< names.length ;i++ ) {
    element = names[i]
    if(typeof element !== "string")
        continue;
    else{
        console.lo(element);
        
    }
}
// for (i=0 ;  i< names.length ;i++ ){
//     element = names[i]

//     if (typeof(element) !== "string" )
//         continue

//     if (element[0] !== element[0].toUpperCase()){
//         element = element[0].toUpperCase()+element.slice(1)
//     }
//     console.log(element);
    

// }

