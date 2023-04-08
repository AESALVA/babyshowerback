const router = require("express").Router();
const Comment = require("../Models/Comment");

router
  .get("/all", async (req, res) => {
    console.log("GET /comments/all");

    try {
      const allComments = await Comment.find();
      res.status(200).json(allComments);
    } catch (error) {
      res.status(400).json({ error: true, message: error });
    }
  })


module.exports = router;
