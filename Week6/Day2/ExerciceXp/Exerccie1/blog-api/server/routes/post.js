const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/", async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = await Post.create({ title, content });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    post.title = title;
    post.content = content;
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    await post.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
