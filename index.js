require('dotenv').config();
const express = require('express');
const app = express();
const Post = require('./Controllers/PostsController');
const User = require('./Controllers/UsersController');
const errorMiddleware = require('./utils/error');
const authMiddleware = require('./utils/authMiddleware');

app.use(express.json());

app.get('/posts', Post.getAll);
app.get('/posts/:id', Post.getOne);
app.post('/posts/create', authMiddleware, Post.createPost);
app.delete('/posts/delete/:id', authMiddleware, Post.deletePost);

app.post('/user/create', User.createUser);
app.get('/login', User.loginUser);

app.use(errorMiddleware);

app.listen(process.env.PORT || 3000, () => {
  console.log(`blogAPI running on port ${process.env.PORT}`);
});