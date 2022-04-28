const express = require("express");
const userRouter = require("./userRouter");
const todolistRouter = require("./todolistRouter");

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/todolists", todolistRouter);

app.listen(5000);
