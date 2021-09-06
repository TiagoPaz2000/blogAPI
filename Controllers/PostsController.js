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
  const { user, file } = req;
  const post = await Posts.createPost(title, categories, content, user, file);

  res.status(201).json({ post });
});

const deletePost = rescue(async (req, res) => {
  const { id } = req.params;
  const { user } = req;

  const deletedPostId = await Posts.deletePost(id, user);

  res.status(200).json({ deletedPostId });
});

const updatePost = rescue(async (req, res) => {
  const { title, categorie, content } = req.body;
  const { id } = req.params;
  const { user, file } = req;
  const updatedPostId = await Posts.updatePost(id, user, title, categorie, content, file);

  res.status(200).json({ updatedPostId });
});

module.exports = {
  getAll,
  getOne,
  createPost,
  deletePost,
  updatePost,
};