function keysAndValues(obj) {
    const keys = Object.keys(obj).sort();  
    const values = keys.map(key=>{return obj[key]});
   
    
    
    
      
    return [keys,values ];  
  }
  
  console.log( keysAndValues({ a: 1, b: 2, c: 3 }));
  

