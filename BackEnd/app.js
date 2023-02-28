const express = require('express');
const body_parser= require('body-parser');
const TodoList =require('./routes/todoRoutes');
const ErrorMiddleware = require('./middleware/error')

const app = express();
app.use(body_parser.urlencoded({extended:false}));
app.use(express.json());
require('dotenv').config({ path: 'BacKend/config/config.env' });
app.use('/api/v1',TodoList)

app.use(ErrorMiddleware)
module.exports = app;