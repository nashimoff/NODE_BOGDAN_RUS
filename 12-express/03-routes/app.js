const express = require("express");

const app = express();

const getRootHandler = (req, res) => {
  res.send("Get root route");
};



//users
const getUsersHandler = (req, res) => {
  res.send("Get users route");
};
const getSingleUserHandler = (req, res) => {
  res.send(`Get user route. UserId ${req.params.userId}`);
};
const postUsersHandler = (req, res) => {
  res.send("Post users route");
};

app.get("/", getRootHandler);

app.get("/users", getUsersHandler);
app.post("/users", postUsersHandler);
app.get("/users/:userId", getSingleUserHandler);

app.listen(5000, () => console.log("Server was started on port 5000"));
