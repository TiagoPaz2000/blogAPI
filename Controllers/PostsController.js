const rescue = require('express-rescue');
const Posts = require('../service/PostsService');

const getAll = async (_req, res) => {
  const posts = await Posts.getAll();

  return res.status(200).json(posts);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const post = await Posts.getOne(id);

  return res.status(200).json(post);
};

const createPost = rescue(async (req, res) => {
  const { title, categories, content } = req.body;
  const { user } = req;

  const post = await Posts.createPost(title, categories, content, user);

  res.status(201).json(post);
});

module.exports = {
  getAll,
  getOne,
  createPost,
};