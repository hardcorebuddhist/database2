const { user, todoitem, todolist } = require("./models");

const listsWithUsers = async () => {
  const lists = await todolist.findAll({
    include: [user],
  });

  return lists.map((list) => console.log(list));
};

// listsWithUsers().then((lists) => console.log(lists));

const userUserWithList = async (id) => {
  const result = await user.findByPk(id, { include: [todolist] });

  return result.get({ plain: true });
};
// userUserWithList(2).then((user) => console.log("user by ID with lists", user));

const importantTodos = async () => {
  const todos = await todoitem.findAll({
    where: { important: true },
    include: { model: todolist, attributes: ["name"] },
  });

  return todos.map((item) => item.get({ plain: true }));
};

importantTodos().then((todoitem) =>
  console.log("important todoitems", todoitem)
);
