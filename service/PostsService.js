const Joi = require('joi');

const { Posts } = require('../models');
const errorHelper = require('../utils/errorHelper');
const validateJoi = require('../utils/validateJoi');

const getAll = async () => {
  const posts = await Posts.findAll();

  return posts;
};

const getOne = async (id) => {
  const post = await Posts.findByPk(id);

  return post
};

const createPost = async (title, categories, content, user) => {
  validateJoi(
    Joi.object({
      title: Joi.string().min(8).required(),
      categories: Joi.string().min(1).required(),
      content: Joi.string().min(30).required(),
      role: Joi.string().min(1).required(),
    }),
    { title, categories, content, role: user.role },
    400,
  );
    
  if (user.role !== 'admin') errorHelper(401, 'You dont have authorization');

  const { dataValues: post } = await Posts
    .create({ title, categories, rating: 0, content });

  return post;
};

const deletePost = async (id, user) => {
  validateJoi(
    Joi.object({
      id: Joi.number().required(),
    }),
    { id },
    400,
  );

  try {
    if (user.role !== 'admin') errorHelper(401, 'You dont have authorization');

    await Posts.destroy({ where: { id } });

    return id;
  } catch (error) {
    errorHelper(400, error);
  };
};

module.exports = {
  getAll,
  getOne,
  createPost,
  deletePost,
};