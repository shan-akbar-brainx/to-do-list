const TodoModel = require('../models/TodoModel');

todosRoute = async (req, res) => {
    const todos = await TodoModel.find();
    res.send(todos);
}

module.exports = todosRoute;