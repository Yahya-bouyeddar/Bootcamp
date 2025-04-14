import express from "express";
import { posts } from "./data.js";
const app = express();
app.use(express.json());
app.use(express.static('crud-api'));
app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

app.post("/api/posts", (req, res) => {
  const title = req.body.title;
  // const id = req.body.id
  const content = req.body.content;
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required." });
  }
  const newPost = {
    id: posts.length + 1,
    title,
    content,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});
app.get("/api/posts", (req, res) => {
  res.json(posts);
});
app.get("/api/posts/:postID", (req, res) => {
  const id = Number(req.params.postID);
  console.log(id);

  const postId = posts.find((p) => p.id == id);
  res.json(postId);
});
app.put("/api/posts/:postID", (req, res) => {
  const id = Number(req.params.postID);
  const index = posts.findIndex((p) => id == p.id);
  if (index === -1) {
    return res.status(404).json({ message: "Post not found" });
  }
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required." });
  }
  const updatedPost = {
    id: id,
    title,
    content,
  };
  posts[index] = updatedPost;
  res.status(200).json({ message: "Post updated", post: updatedPost });
});
app.delete('/api/posts/:postID',(req,res)=>{
    const id =Number(req.params.postID) 
    if(id===-1){
        return res.status(404).json({ message: "Post not found" });

    }

    const index = posts.findIndex(p=>p.id==id)
    posts.splice(index,1)
    res.status(200).json({message:'article suprimé'})

})
