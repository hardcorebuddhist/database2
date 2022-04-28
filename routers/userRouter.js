const { Router } = require("express");
const User = require("../models").user;
const TodoList = require("../models").todolist;
const TodoItem = require("../models").todoitem;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    res.send(await User.findAll());
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// *** GET LIST OF USERS with (todoilists + todoitems) ***

router.get("/todolists/todoitems", async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: { model: TodoList, include: { model: TodoItem } },
    });
    res.send(users);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// UPDATE USER's PHONE

router.patch("/:id", async (req, res, next) => {
  try {
    const { phone } = req.body;
    const { id } = req.params;

    // find the user
    const user = await User.findByPk(id);

    // then update user
    const updatedUser = await user.update({ phone });

    res.send(updatedUser);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
