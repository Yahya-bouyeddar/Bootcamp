const express = require("express");
const { Sequelize } = require("sequelize");
const app = express();

app.use(express.json());

const sequelize = new Sequelize(
  "postgres://postgres:12345678@localhost:5432/blogdb"
);

sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Error connecting to the database: ", err));

const postRoutes = require("./server/routes/posts");

app.use("/posts", postRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
