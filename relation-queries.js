const { user, todoitem, todolist } = require("./models");

const listsWithUsers = async () => {
  const lists = await todolist.findAll({
    include: [user],
  });

  return lists.map((list) => console.log(lists));
};

listsWithUsers().then((lists) => console.log(lists));

const userUserWithList = async (id) => {
  const result = await user.findByPk(id, { include: [todolist] });

  return result.get({ plain: true });
};
// userUserWithList(2).then((user) => console.log("user by ID with lists", user));
