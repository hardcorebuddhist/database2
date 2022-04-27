const express = require("express");
const User = require("./models").user;
const TodoList = require("./models").todolist;
const TodoItem = require("./models").todoitem;

const app = express();
const PORT = 4000;

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

app.get("/todolists", async (req, res) => {
  const todolists = await TodoList.findAll();
  res.send(todolists);
});

app.get("/todoitems", async (req, res) => {
  const todoitem = await TodoItem.findAll();
  res.send(todoitem);
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
