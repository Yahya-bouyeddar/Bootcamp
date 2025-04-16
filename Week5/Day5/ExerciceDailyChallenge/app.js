import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use(express.json());
const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "🌻", name: "Sunflower" },
  { emoji: "🏀", name: "Basketball" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🐱", name: "Cat" },
  { emoji: "🍔", name: "Hamburger" },
  { emoji: "🍎", name: "Apple" },
  { emoji: "🍉", name: "Watermelon" },
  { emoji: "🌍", name: "Earth" },
  { emoji: "🌙", name: "Moon" },
  { emoji: "🎸", name: "Guitar" },
  { emoji: "🎂", name: "Cake" },
  { emoji: "🏖️", name: "Beach" },
  { emoji: "🎨", name: "Palette" },
  { emoji: "🎮", name: "Video Game" },
  { emoji: "🦄", name: "Unicorn" },
  { emoji: "💻", name: "Laptop" },
];

function getRandomEmojiQuestion() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  const options = [correct.name];
  while(options.length<4){
    const random = emojis[Math.floor(Math.random() * emojis.length)].name;
    if(!options.includes(random)){
      options.push(random)
    }
  }
  return{
    emoji : correct.emoji,
    correctAnswer: correct.name,
    options: options.sort(() => Math.random() - 0.5)

  } 
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  res.send(getRandomEmoji())
});
app.get('/emoji',(req,res)=>{
  // res.sendFile(path.join(__dirname, 'public', 'index.html'));
  res.send(getRandomEmoji())
})

app.listen(3000, () => {
  console.log("server is listening in port 3000");
});
