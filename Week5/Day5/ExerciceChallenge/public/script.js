
let currentScore = 0;

function fetchGameData() {
  fetch('/game')
    .then(response => response.json())
    .then(data => {
      const { emoji, options, correctAnswer } = data;
      document.getElementById('emoji').textContent = emoji;
      const optionsContainer = document.getElementById('options');
      optionsContainer.innerHTML = ''; 

      options.forEach(option => {
        const optionButton = document.createElement('div');
        optionButton.className = 'option';
        optionButton.textContent = option.name;
        optionButton.onclick = () => checkAnswer(option.name, correctAnswer);
        optionsContainer.appendChild(optionButton);
      });
    });
}

function checkAnswer(selectedAnswer, correctAnswer) {
  const feedback = document.getElementById('feedback');
  if (selectedAnswer === correctAnswer) {
    feedback.textContent = 'Correct!';
    currentScore++;
  } else {
    feedback.textContent = 'Wrong, try again!';
  }
  document.getElementById('score').textContent = currentScore;
  updateLeaderboard();
  fetchGameData();
}

function updateLeaderboard() {
  fetch('/score', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ score: currentScore }),
  })
    .then(response => response.json())
    .then(data => {
      const leaderboard = document.getElementById('leaderboard');
      leaderboard.innerHTML = ''; 
      data.scores.slice(0, 5).forEach(score => {
        const listItem = document.createElement('li');
        listItem.textContent = `Score: ${score}`;
        leaderboard.appendChild(listItem);
      });
    });
}


window.onload = () => {
  fetchGameData();
};
