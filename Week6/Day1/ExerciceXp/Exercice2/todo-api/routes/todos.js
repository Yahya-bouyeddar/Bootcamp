const express = require("express");
const router = express.Router();

let todos = [];
let currentId = 1;

router.get("/", (req, res) => {
  res.json(todos);
});

router.post("/", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const newTodo = { id: currentId++, title };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const todo = todos.find((t) => t.id == id);

  if (!todo) return res.status(404).json({ error: "To-do not found" });
  if (!title) return res.status(400).json({ error: "Title is required" });

  todo.title = title;
  res.json(todo);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const beforeLength = todos.length;

  todos = todos.filter((todo) => todo.id != id);

  if (todos.length === beforeLength) {
    return res.status(404).json({ error: "To-do not found" });
  }

  res.status(204).send();
});

module.exports = router;
