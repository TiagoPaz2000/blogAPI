require('dotenv').config();
const express = require('express');
const app = express();
const Post = require('./Controllers/PostsController');
const User = require('./Controllers/UsersController');

app.use(express.json());

app.get('/posts', Post.getAll);
app.get('/posts/:id', Post.getOne);
app.post('/user', User.createUser);

app.listen(process.env.PORT || 3000, () => {
  console.log(`blogAPI running on port ${process.env.PORT}`);
});