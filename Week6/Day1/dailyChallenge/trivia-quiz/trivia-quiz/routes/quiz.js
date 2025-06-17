const express = require("express");
const router = express.Router();

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

let currentQuestionIndex = 0;
let score = 0;

router.get("/", (req, res) => {
  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({ question: triviaQuestions[currentQuestionIndex].question });
  } else {
    res.json({ message: "Quiz finished! Please submit your score." });
  }
});

router.post("/", (req, res) => {
  const userAnswer = req.body.answer;

  if (
    userAnswer &&
    userAnswer.toLowerCase() ===
      triviaQuestions[currentQuestionIndex].answer.toLowerCase()
  ) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({
      message: "Correct answer! Moving to the next question.",
      question: triviaQuestions[currentQuestionIndex].question,
    });
  } else {
    res.json({ message: "Quiz completed! Submit your score." });
  }
});

router.get("/score", (req, res) => {
  res.json({ score: score, totalQuestions: triviaQuestions.length });
});

module.exports = router;
