const express = require("express");
const User = require("./models").user;
const TodoList = require("./models").todolist;
const TodoItem = require("./models").todoitem;

const app = express();
const PORT = 4000;

app.use(express.json());

// *** GET LIST OF USERS ***

app.get("/users", async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: { model: TodoList, include: TodoItem },
    });
    res.send(users);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

app.get("/todolists", async (req, res) => {
  const todolists = await TodoList.findAll();
  res.send(todolists);
});

app.get("/todoitems", async (req, res) => {
  const todoitems = await TodoItem.findAll();
  res.send(todoitems);
});

// CREATE NEW USER

app.post("/users", async (req, res, next) => {
  try {
    const { name, email, password, phone } = req.body;
    const newUser = await User.create({ name, email, password, phone });
    res.send(newUser);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// UPDATE USER's PHONE

app.patch("/users/:id", async (req, res, next) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    // find the user
    const user = await User.findByPk(id);

    // then update user
    const updatedUser = await user.update({ name });

    res.send(updatedUser);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// Make a POST request to /users with an email and confirm that the data (including id) is returned in the response.

app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

// CREATE USER

app.post("/users", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (e) {
    next(e);
  }
});

/* Add a route definition that will respond to GET requests to /users/:userId. 
Use the User.findByPk() method along with the userId route parameter. 
Fetch the correct user from the database and return it as a JSON response.*/

app.put("/users/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedUser = await userToUpdate.update(req.body);
      res.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
