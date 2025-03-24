const colors = ["Rouge", "Bleu", "Vert", "Jaune", "Violet"];
const sufix = ["Mon premier choix ","Mon deuxiem choix ","Mon troisieme choix" ,"Mon quariéme choix ","Mon cinquiéme choix "]
for (i=0;i<colors.length;i++){
    console.log(`mon choix n ${i+1} : ${colors[i]}`);
    
}

for(i=0;i<colors.length;i++){
    console.log(`${sufix[i]} : ${colors[i]}`);
    
}