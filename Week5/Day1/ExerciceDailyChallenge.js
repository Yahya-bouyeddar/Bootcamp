const prompt = require('prompt-sync')();

//  function makeAllCaps(array){
//     return new Promise((resolve,reject)=>{
//         const allString = array.every(item => typeof item ==='string')

//         if(allString){
//             resolve(array.map(item=>item.toUpperCase()))
//         }
//         else{
//             reject("Tous les éléments doivent être des chaînes de caractères")
//         }
//     })

// }
// function sortWords(array){
//     return new Promise((resolve,reject)=>
//     {
//         if(array.length >4){
//             resolve(array.sort())
//         }
//         else{
//             reject("Le tableau doit contenir plus de 4 éléments")
//         }
//     })

// }

// makeAllCaps([1, "pear", "banana"])
// .then((array)=>sortWords(array))
// .then((result)=> console.log(result)

// )
// .catch(error=>console.log(error)
// )

// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))


// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
// .then((arr) => sortWords(arr))
// .then((result) => console.log(result)) 
// .catch(error => console.log(error))


// 2eme Defie 
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

  function toJs(){
    return new Promise((resolve,reject)=>{
        const jsonObject = JSON.parse(morse)
        if(Object.keys(jsonObject).length === 0){
            reject('Chaine vide')
            

        }else{
            resolve(jsonObject)
        }
    })
  }

  function toMorse(morseJS){
    return new Promise((resolve,reject)=>{
        let utili = prompt("enter un mot ou une phrase")
        let wordArray = utili.split('')
        let arraTradu = []
        for(let char of wordArray){
            let wordArrayLower = char.toLocaleLowerCase()
            if(morseJS[wordArrayLower]){
                arraTradu.push(morseJS[wordArrayLower])
            }
            else{
                reject(`Le caractère "${char}" n'existe pas dans l'alphabet Morse`);
            }

        }
        resolve(arraTradu)

    })
  }

function joinWords(morseTranslation){
        return new Promise(resolve=>{
            const morsString= morseTranslation.join("\n")
            resolve(morsString)

        })
    }




  
toJs()
.then(morseJS=>{
    
   return toMorse(morseJS)
     
})
.then(translation=>{
    return joinWords(translation)
})

.then(result => 
    console.log("Traduction Morse :", result))
.catch(error => 
    console.log(error)
    
)
   
  





  
 