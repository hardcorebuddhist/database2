const { Router } = require("express");
const TodoList = require("../models").todolist;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    res.send(await TodoList.findAll());
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
