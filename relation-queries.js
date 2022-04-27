const { user, todoitem, todolist } = require("./models");

// *** LIST WITH USERS

const listsWithUsers = async () => {
  const lists = await todolist.findAll({
    include: [user],
  });

  return lists.map((list) => console.log(list));
};

// listsWithUsers().then((lists) => console.log(lists));

// *** Get one user by id with his lists.

const userUserWithList = async (id) => {
  const result = await user.findByPk(id, { include: [todolist] });

  return result.get({ plain: true });
};
// userUserWithList(2).then((user) => console.log("user by ID with lists", user));

// Get important TodoItems with the name of the list they belong to

const importantTodos = async () => {
  const todos = await todoitem.findAll({
    where: { important: true },
    include: { model: todolist, attributes: ["name"] },
  });

  return todos.map((item) => item.get({ plain: true }));
};

// importantTodos().then((todoitem) =>
//   console.log("important todoitems", todoitem)
// );

// *** Get one user by id with his lists, which also contain their belonging TodoItem's task attribute.

const fullUserById = async (id) => {
  const result = await user.findByPk(id, {
    include: [
      {
        model: todolist,
        attributes: ["name"],
        include: { model: todoitem, attributes: ["task"] },
      },
    ],
  });
  return result.get({ plain: true });
};

fullUserById(2).then((user) => console.log("user with tasks", user));
