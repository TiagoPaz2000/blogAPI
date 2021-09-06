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

const createPost = async (title, categorie, content, user, image) => {
  validateJoi(
    Joi.object({
      title: Joi.string().min(8).required(),
      categorie: Joi.string().min(1).required(),
      content: Joi.string().min(30).required(),
      role: Joi.string().min(1).required(),
      urlImage: Joi.string().min(1).required(),
    }),
    { title, categorie, content, role: user.role, urlImage: image.filename },
    400,
  );
    
  if (user.role !== 'admin') errorHelper(401, 'You dont have authorization');

  const urlImage = `/temp/uploads/${image.filename}`;

  const { dataValues: post } = await Posts
    .create({ title, categorie, rating: 1, content, urlImage });

  return post;
};

const deletePost = async (id, user) => {
  validateJoi(
    Joi.object({
      id: Joi.number().required(),
      role: Joi.string().min(1).required(),
    }),
    { id, role: user.role },
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

const updatePost = async (id, user, title, categorie, content, image) => {
  validateJoi(
    Joi.object({
      title: Joi.string().min(8).required(),
      categorie: Joi.string().min(1).required(),
      content: Joi.string().min(30).required(),
      role: Joi.string().min(1).required(),
      urlImage: Joi.string().min(1).required(),
    }),
    { title, categorie, content, role: user.role, urlImage: image.filename },
    400,
  );

  const urlImage = `/temp/uploads/${image.filename}`;

  try {
    if (user.role !== 'admin') errorHelper(401, 'You dont have authorization');
    await Posts.update({ title, categorie, content, urlImage }, { where: { id } });
    return id;
  } catch (error) {
    errorHelper(400, error);
  };
}

module.exports = {
  getAll,
  getOne,
  createPost,
  deletePost,
  updatePost,
};