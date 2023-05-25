const express=require('express');
const taskController=require('../controllers/task')
const router=express.Router();

router.get('/get-task',taskController.getTask);

router.post('/add-task',taskController.postTask)

router.use(`/delete-task/:taskId`,taskController.deleteTask)

router.get('/get-task/:taskId',taskController.getSpecificTask)

module.exports=router;