import express from "express";
import Blog from "../models/blog.model.js";

const router = express.Router();

router.get("/", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

router.post("/a", (request, response) => {
  const blog = new Blog(request.body);

  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

export default router;
