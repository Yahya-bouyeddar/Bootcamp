// server/controllers/bookController.js
const books = require("../models/book");

exports.getAllBooks = (req, res) => {
  res.status(200).json(books);
};

exports.getBookById = (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
};

exports.createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res
      .status(400)
      .json({
        message: "Please provide all fields: title, author, publishedYear",
      });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear,
  };

  books.push(newBook);
  res.status(201).json(newBook);
};
