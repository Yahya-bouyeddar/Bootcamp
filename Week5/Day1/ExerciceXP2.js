let promise = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('succés')},4000
    )
})
promise.then((message)=>{
    console.log(message);
    
})