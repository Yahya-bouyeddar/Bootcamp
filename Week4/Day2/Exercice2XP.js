const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];


for (const color in colors) {
    

    color==0 ? console.log(`Le ${parseInt(color)+1}${ordinal[1]} choix est le ${colors[color]}`) :
     color==1 ?console.log(`Le ${parseInt(color)+1}${ordinal[2]} choix est le ${colors[color]}`):
     color == 2 ? console.log(`Le ${parseInt(color)+1}${ordinal[3]} choix est le ${colors[color]}`):
     console.log(`Le ${parseInt(color)+1}${ordinal[0]} choix est le ${colors[color]}`)

    
    
    
}