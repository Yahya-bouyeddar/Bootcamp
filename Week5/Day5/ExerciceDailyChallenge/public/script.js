
const emoji = document.getElementById("emoji");
const guess = document.getElementById("guess");
const button = document.querySelector("button");
const result = document.getElementById("result");
const clear = document.getElementById('clear')
async function loadEmoji() {
  const res = await fetch('/emoji');
  const data = await res.text();
  emoji.textContent = data;
}

loadEmoji();

// function getRandamEmoji() {
//   const indexRandom = Math.floor(Math.random() * emojis.length);

//   const randomEmoji = emojis[indexRandom];
//   emoji.textContent = randomEmoji.emoji
//   return randomEmoji.name
// }
// function getResult(guessAnswer) {
//   if (emojiName.toLocaleLowerCase() === guessAnswer.toLocaleLowerCase()) {
//     result.textContent = "felicitation votre reponse est correcte";
//   } else {
//     result.textContent = `votre reponse est fausse et la reponse correcte est ${emojiName}`;
//   }
// }
// button.addEventListener("click",(e) =>{
//   e.preventDefault()
    
//   const userInput = guess.value;
//   getResult(userInput)
 
    
//   })

// clear.addEventListener('click',()=>{
//     guess.value = ''
//     result.textContent = ''
//     emojiName = getRandamEmoji()
// })



