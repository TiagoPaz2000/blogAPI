const getAll = async (_req, res) => {
  return res.status(200).json({ message:"response" });
};

module.exports = {
  getAll,
}