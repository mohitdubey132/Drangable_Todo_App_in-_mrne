const mongoose= require('mongoose');


const todoSchema = new mongoose.Schema({
    task: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['Incomplete', 'Complete'],
      default: 'Incomplete'
    },
    dueDate: {
      type: Date,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  module.exports = mongoose.model('Todo', todoSchema);