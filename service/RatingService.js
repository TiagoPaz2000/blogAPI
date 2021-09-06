const { PostRatings } = require('../models');
const errorHelper = require('../utils/errorHelper');

const getRating = async (postId, userId) => {
  try {
    const rating = await PostRatings.findOne({ where: { postId, userId } });
    return rating;
  } catch(error) {
    errorHelper(400, error);
  }
}

const addRating = async(PostId, UserId) => {
  try {
    const alreadyVotedRating = await getRating(PostId, UserId);

    if (alreadyVotedRating) errorHelper(401, 'You already voted for this post');
    
    const ratingPost = await PostRatings.create({ PostId, UserId });

    return ratingPost;
  } catch (error) {
    errorHelper(400, error);
  }
};

const deleteRating = async(PostId, UserId) => {
  try {
    const alreadyVotedRating = await getRating(PostId, UserId);

    if (!alreadyVotedRating) errorHelper(401, "You haven't voted for this post yet");

    await PostRatings.destroy({ where: { PostId, UserId } });

    return PostId;
  } catch (error) {
    errorHelper(400, error);
  }
};

module.exports = {
  addRating,
  deleteRating,
};