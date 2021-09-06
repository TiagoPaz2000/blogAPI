const rescue = require('express-rescue');
const Rating = require('../service/RatingService');

const addRating = rescue(async (req, res) => {
  const { id } = req.params;
  const { user } = req;

  const ratingPost = await Rating.addRating(id, user.id);

  res.status(201).json({ ratingPost });
});

const deleteRating = rescue(async (req, res) => {
  const { id } = req.params;
  const { user } = req;

  const deletedRating = await Rating.deleteRating(id, user.id);

  res.status(200).json({ deletedRating });
})

module.exports = {
  addRating,
  deleteRating
}