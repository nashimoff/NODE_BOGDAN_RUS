const express = require('express')

const router = express.Router()


// comments
const getCommentsHandler = (req, res) => {
  res.send("Get comments route");
};
const getSingleCommentHandler = (req, res) => {
  res.send(`Get comment route. CommentId ${req.params.commentId}`);
};
const postCommentsHandler = (req, res) => {
  res.send("Post comments route");
};
const deleteCommentHandler = (req, res) => {
  res.send(`Delete comment route.CommentId ${req.params.commentId}`);
};

router.get("/comments", getCommentsHandler);
router.post("/comments", postCommentsHandler);
router.get("/comments/:commentId", getSingleCommentHandler);
router.delete("/comments/:commentId", deleteCommentHandler);

module.exports = router