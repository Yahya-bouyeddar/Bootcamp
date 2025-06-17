const express = require("express");
const router = express.Router();

// Base de données en mémoire
let books = [];
let currentId = 1;

router.get("/", (req, res) => {
  res.json(books);
});

router.post("/", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required" });
  }

  const newBook = { id: currentId++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const book = books.find((b) => b.id == id);

  if (!book) return res.status(404).json({ error: "Book not found" });
  if (!title || !author)
    return res.status(400).json({ error: "Title and author are required" });

  book.title = title;
  book.author = author;

  res.json(book);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const beforeLength = books.length;

  books = books.filter((book) => book.id != id);

  if (books.length === beforeLength) {
    return res.status(404).json({ error: "Book not found" });
  }

  res.status(204).send();
});

module.exports = router;
