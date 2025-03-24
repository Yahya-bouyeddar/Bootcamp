const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  }
let sentence = "" 
for (detail in details){
    sentence += detail + " " + details[detail] + " "
    
  
    
}


console.log(sentence);

