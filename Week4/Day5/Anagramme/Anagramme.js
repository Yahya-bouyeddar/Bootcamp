

function anagramme(chaine1,chaine2){
    const obj1 = chaine1.split("").sort().join('').trim()
    const obj2 = chaine2.split("").sort().join('').trim()
    console.log(obj1);
    console.log(obj2);
    
    
   if(obj1==obj2){
    console.log(`${chaine1} is an anagram of ${chaine2}`);
    
   }else{
    console.log('failed');
    
   }
  
        
   
}
anagramme('yassine' , 'yass in     e')
anagramme('yahya','yio')

