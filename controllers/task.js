const Task=require('../models/task')
exports.getTask=(req,res,next)=>{
    Task.find().then(result=>{
      res.status(201).json(result)
      console.log(result)
    })
    .catch(err=>console.log(err))
  }

exports.postTask=(req,res,next)=>{
    const task=new Task({
        title:req.body.title,
        description:req.body.description,
        status:req.body.status
    })
    task.save().then(result=>{
        res.status(201).json(result)
        console.log(result)
    })
    .catch(err=>console.log(err))
}

exports.deleteTask=(req,res,next)=>{
    const taskId=req.params.taskId;
    Task.findByIdAndRemove(taskId).then((result)=>{
       console.log(result)
       console.log('deleted')
    })
    .catch(err=>console.log(err))
}

exports.getSpecificTask=(req,res,next)=>{
    const taskId=req.params.taskId
    Task.findById(taskId).then(result=>{
      res.status(201).json(result)
      console.log(result)
    })
    .catch(err=>console.log(err))
  }