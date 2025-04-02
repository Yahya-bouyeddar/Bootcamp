const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]

colors.map(function(color,i){
    console.log(`Le choix ${i+1} est ${color}`);
    
})
if(colors.some(color=> color ==='Violet')){
    console.log("Yeah");
    
}else{
    console.log('noooooooooooooo');
    
}