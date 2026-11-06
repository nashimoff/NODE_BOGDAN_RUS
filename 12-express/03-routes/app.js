const express = require("express");

const app = express();

const getRootHandler = (req, res) => {
  res.send("Get root route");
};

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

//users
const getCommentsHandler = (req, res) => {
  res.send("Get comments route");
};
const getSingleCommentHandler = (req, res) => {
  res.send(`Get comment route. CommentId ${req.params.commentId}`);
};
const postCommentsHandler = (req, res) => {
  res.send("Post comments route");
};

app.get("/", getRootHandler);
app.get("/comments", getCommentsHandler);
app.post("/comments", postCommentsHandler);
app.get("/comments/:commentId", getSingleCommentHandler);
app.delete("/comments/:commentId", deleteCommentHandler);
app.get("/users", getUsersHandler);
app.post("/users", postUsersHandler);
app.get("/users/:userId", getSingleUserHandler);

app.listen(5000, () => console.log("Server was started on port 5000"));
