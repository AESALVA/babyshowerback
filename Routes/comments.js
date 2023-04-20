const router = require("express").Router();
const Comment = require("../Models/Comment");
const { body, validationResult } = require('express-validator');


router
  .get("/all", async (req, res) => {
    console.log("GET /comments/all");

    try {
      const allComments = await Comment.find();
      res.status(200).json(allComments);
    } catch (error) {
      res.status(400).json({ error: true, message: error });
    }
  }).post("/newMessage", body("comment").matches("^[a-zA-Z ]*$").isLength({ min: 8, max: 300 }), async (req, res) => {
    console.log("POST /Messages/newMessage");
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(), message:"validation error" });
    }

    const { body } = req;

    try {
      const newMessage = new Comment(body);
      await newMessage.save();
      res.status(200).json(newMessage);
    } catch (error) {
      res.status(400).json({ error: true, message: error });
    }
  })


module.exports = router;
