const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

const bookRoutes = require("./server/routes/books");

app.use("/api/books", bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
