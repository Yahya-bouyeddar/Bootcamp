const express = require("express");
const app = express();
const userRoutes = require("./server/routes/userRoutes");

app.use(express.json());

app.use("/api", userRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
