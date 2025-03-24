const people = ["Greg", "Mary", "Devon", "James"]
// =================>Partie1
// 1)Écrivez le code pour supprimer « Greg » du people tableau.
people.splice(0,1)
console.log(people);
// 2)Écrivez le code pour remplacer « James » par « Jason ».
people[2] = "jason"
console.log(people);
// Écrivez le code pour ajouter votre nom à la fin du peopletableau.
people.push("Elouazzani")
console.log(people);
// Écrivez le code qui console.logs l'index de Mary. Jetez un œil à la indexOfméthode sur Google .
console.log(people.indexOf("Mary"));
// Écrivez du code pour faire une copie du peopletableau à l'aide de la sliceméthode.
console.log(people.slice(1,3))
// Écrivez du code qui donne l'index de « Foo ». Pourquoi renvoie-t-il -1 ?
console.log(people.indexOf("Foo"));
// car il n'as pas trouvé l'index 
const last = people[people.length-1]
console.log(last);


// =================>Partie2

// À l'aide d'une boucle, parcourez le peopletableau et la console.log de chaque personne.
for (i=0 ; i<people.length;i++){
    console.log(people[i]);
    
}

// À l'aide d'une boucle, parcourez le peopletableau et quittez la boucle après avoir exécuté console.log “Devon”.
// Conseil : consultez l' breakinstruction de la leçon.
console.log(people);

for (i=0 ; i<people.length;i++){
    if(people[i]=="Devon")
     break
    console.log(people[i]);

}