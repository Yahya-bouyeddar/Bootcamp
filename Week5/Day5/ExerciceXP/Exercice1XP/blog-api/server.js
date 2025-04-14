import express from "express";
const app = express();

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
const posts = [
  {
    id: 1,
    title: "The Wonders of Space",
    content:
      "Space is vast and full of mysteries. In this post, we'll explore some of the most amazing phenomena in the universe.",
  },
  {
    id: 2,
    title: "A Journey Through Time",
    content:
      "Time travel has been a popular concept in science fiction for decades. In this article, we discuss how time travel might be possible.",
  },
  {
    id: 3,
    title: "Exploring the Depths of the Ocean",
    content:
      "The ocean covers more than 70% of the Earth's surface. Join us as we dive deep into the unknown and explore the creatures that inhabit the ocean.",
  },
  {
    id: 4,
    title: "The Future of Technology",
    content:
      "Technology is evolving rapidly. In this post, we look at the future of AI, robotics, and other innovations that will shape our world.",
  },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});
app.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);

  const post = posts.find((p) => p.id === id);
  if (!post) {
    res.status(404).send("post not found");
  }
  res.status(200).json(post);
});
app.post("/posts", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});
app.use(express.json());
app.put("/posts/:id", (req, res) => {
  const id = Number(req.params.id);

  const postUp = posts.find((p) => p.id === id);
  if (!postUp) {
    return res.status(404).send("Post not found");
  }
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).send("Title and content are required");
  }

  postUp.title = title;
  postUp.content = content;
  res.json(postUp);
});
app.delete('/posts/:id',(req,res)=>{
    const idDelete = Number(req.params.id)
    const IndexPost = posts.findIndex(p=>p.id===idDelete)
    if(!IndexPost){
        return res.status(404).send('post Not founf')
    }
    posts.splice(IndexPost,1)
    res.status(200).json('c est suprimé ')
})
