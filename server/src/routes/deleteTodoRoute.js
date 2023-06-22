const TodoModel = require('../models/TodoModel');

deleteTodoRoute = async (req, res) => {
    const {id} = req.params;
    const todo =  await TodoModel.findByIdAndRemove(id);
    res.status(204).json(todo);
}

module.exports = deleteTodoRoute;