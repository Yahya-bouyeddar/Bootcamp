
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));
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


function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const correctEmoji = emojis[randomIndex];
  
  const distractors = [];
  while (distractors.length < 3) {
    const randomDistractor = emojis[Math.floor(Math.random() * emojis.length)];
    if (!distractors.includes(randomDistractor) && randomDistractor !== correctEmoji) {
      distractors.push(randomDistractor);
    }
  }

  const options = [correctEmoji, ...distractors];
  return {
    correctAnswer: correctEmoji.name,
    emoji: correctEmoji.emoji,
    options: options.sort(() => Math.random() - 0.5), 
  };
}

app.get('/game', (req, res) => {
  const gameData = getRandomEmoji();
  res.json(gameData);
});

let scores = [];

app.post('/score', (req, res) => {
  const { score } = req.body;
  scores.push(score);
  scores.sort((a, b) => b - a);
  res.json({ success: true, scores });
});

app.get('/leaderboard', (req, res) => {
  res.json(scores.slice(0, 5)); 
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
