const User = require("./models").user;
const TodoItem = require("./models").todoitem;

// GET AllUsers

async function getAllUsers() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    const allUsers = await User.findAll();
    return allUsers.map((user) => user.get({ plain: true }));
  } catch (e) {
    console.log(e);
  }
}

// getAllUsers().then((users) => console.log(users));

// GET ALL TODOITEMS

const getAllTodoItems = async () => {
  try {
    const allTodoItems = await TodoItem.findAll();
    return allTodoItems.map((todoitem) => todoitem.get({ plain: true }));
  } catch (e) {
    console.log(e);
  }
};
// getAllTodoItems().then((result) => console.log(result));

// GET USER BY ID

const getUserByPk = async (key) => {
  const user = await User.findByPk(key);
  return user ? user.get({ plain: true }) : "Not found!";
};
// getUserByPk(3).then((result) => console.log(result));

// CREATE NEW

const createNewUser = async ({ name, email, phone, password }) => {
  const newUser = await User.create({ name, email, phone, password });
  return newUser.get({ plain: true });
};
// createNewUser({
//   name: "Rein",
//   email: "rein@rein.com",
//   phone: "93836735",
//   password: "jdjdeuej",
// }).then((result) => console.log(result));

// SEARCH FOR IMPORTANT TodoItems

const importantTodos = async () => {
  const todos = await TodoItem.findAll({ where: { important: true } });
  return todos.map((todo) => todo.get({ plain: true }));
};
importantTodos().then((result) => console.log(result));
