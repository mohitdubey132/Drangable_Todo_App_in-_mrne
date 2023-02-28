const mongoose= require('mongoose')
const Todo = require('../model/todo');
const ErrorHandler = require('../middleWare/error');
const catchAsyncError = require('../middleWare/catchAsyncError');

//---------------------creating task------------------------------

exports.createTask =catchAsyncError( async (req,res,next)=>{
    const Task = await(Todo.create(req.body));
    res.status(201).json({
        success: true,
        Task
    })

});

//-----------------get all Tasks --------------------------------

exports.getAllTask = catchAsyncError(async(req,res,next)=>{
    const getTask = await(Todo.find())
    res.status(200).json({
        seccess: true,
        getTask
    })
});

//----------------update task status ----------------------------

exports.ChangeStatus = catchAsyncError( async(req,res,next)=>{
    console.log(req.params.id)
    let task = await Todo.findById(req.params.id)
    if (!task) {
        return next(new ErrorHandler('Either id not found or ...', 500));
    }
    updatedTask = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify: false })
    res.status(200).json({
        success: true,
        updatedTask
    })


});

//-------------------delete task using id------------------------

exports.TaskDelete = catchAsyncError(async(req,res,next)=>{
    let task = await Todo.findById(req.params.id);
    if(!task){
        return next(new ErrorHandler('Either task is not available or server error'));
    }
    TodoList = await Todo.findByIdAndDelete(req.params.id) 
    res.status(200).json({
        success:true,
        message:"task removed from the list "
    })
});