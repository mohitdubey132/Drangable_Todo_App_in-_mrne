const express = require('express');
const { createTask, getAllTask, ChangeStatus, TaskDelete } = require('../controller/todoController');
const Routes = express.Router();

Routes.route('/addTodos').post(createTask);
Routes.route('/getTodo').get(getAllTask);
Routes.route('/task/:id').put(ChangeStatus).delete(TaskDelete);
module.exports = Routes;
