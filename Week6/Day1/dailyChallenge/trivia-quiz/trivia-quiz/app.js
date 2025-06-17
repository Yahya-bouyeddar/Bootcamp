const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const quizRouter = require("./routes/quiz");
app.use("/quiz", quizRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
