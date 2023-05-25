const express=require('express');
const taskRoutes=require('./routes/task')
const parsedBody=require('body-parser')
const cors=require('cors')
const mongoose=require('mongoose')

const app=express();
app.use(cors());
app.use(parsedBody.json());
app.use(parsedBody.urlencoded({ extended: true }));
app.use(taskRoutes)

mongoose.connect('mongodb+srv://dhruvbhanu1003:Dhruv2808@cluster0.0oqu9aj.mongodb.net/task?retryWrites=true&w=majority').then(result=>{
    app.listen(3000);
})
.catch(err=>console.log(err))