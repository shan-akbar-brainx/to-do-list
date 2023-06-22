const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');
const loginRoute = require('./routes/loginRoute');
const readTodosRoute = require('./routes/readTodosRoute');
const createTodoRoute = require('./routes/createTodoRoute');
const updateTodoRoute = require('./routes/updateTodoRoute');
const deleteTodoRoute = require('./routes/deleteTodoRoute');
const router = express.Router();

router.post('/login', loginRoute);

router.get('/todos', isLoggedIn, readTodosRoute);

router.post('/todos', isLoggedIn, createTodoRoute);

router.put('/todos/:id', isLoggedIn, updateTodoRoute);

router.delete('/todos/:id', isLoggedIn, deleteTodoRoute);


module.exports = router;