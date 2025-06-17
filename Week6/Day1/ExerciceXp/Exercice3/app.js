const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const booksRouter = require("./Routes/books");
app.use("/books", booksRouter);

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});