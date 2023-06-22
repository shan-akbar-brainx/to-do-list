const TodoModel = require('../models/TodoModel');

updateTodoRoute = async (req, res) => {
    const {id} = req.params;
    const todo = await TodoModel.findById(id);
    todo.completed = req.body.completed;
    todo.text = req.body.text;
    await todo.save();
    res.json(todo);
}

module.exports = updateTodoRoute;