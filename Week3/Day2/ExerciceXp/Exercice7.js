const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let mot = []
for (i=0;i<names.length;i++){
    let mots = names[i]
    mot.push(mots[0])
    mot.sort()
}
console.log(mot.join(""));

// autre methode

console.log(names.map(name => name[0]).sort().join(""))