import express from "express"
const app = express()
const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: 1960
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      publishedYear: 1949
    },
    {
      id: 3,
      title: "Moby-Dick",
      author: "Herman Melville",
      publishedYear: 1851
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedYear: 1925
    },
    {
      id: 5,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publishedYear: 1813
    }
  ];
  
  app.listen(5000,()=>{
    console.log("server is listening on port 5000");
    
  })
  app.get('/api/books',(req,res)=>{
    res.json(books)
  })
  app.get('/api/books/:bookId',(req,res)=>{
    const idBook = Number(req.params.bookId)
    const book = books.find(p=>idBook===p.id)
    if(!book){
       return res.status(404).send("book not found")
    }
    res.status(200).send(book)
  })
  app.use(express.json());
  app.post('/api/books',(req,res)=>{
    const {title,author,publishedYear}= req.body
    if(!title || !author || !publishedYear){
       res.status(404).send("Title and author and publishedyear are required")
    }
    const newBook = {
        id : books.length +1,
        title : title,
        author : author,
        publishedYear : publishedYear
    }
    books.push(newBook)
    res.status(201).json("book created")
  })
  