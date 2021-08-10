const { Posts } = require('../models');

const getAll = async () => {
  const posts = await Posts.findAll();

  return posts;
};

const getOne = async (id) => {
  const post = await Posts.findByPk(id);

  return post
}

module.exports = {
  getAll,
  getOne,
}