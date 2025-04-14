import express from 'express'
const app = express();

const products = [
  { id: 1, name: "iPhone", price: 800 },
  { id: 2, name: "iPad", price: 650 },
  { id: 3, name: "iWatch", price: 750 },
];





app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
app.use(express.json()); // parse json body content

app.post("/api/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});
