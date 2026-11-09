const express = require("express");
const commentsRouter = require("./comments");
const usersRouter = require("./users");
const getRootHandler = require("../controllers/root");

const router = express.Router();

router.get("/", getRootHandler);
router.use("/comments", commentsRouter);
router.use("/users", usersRouter);

module.exports = router;
