const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({ extended: true })
);
  

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MOndoDB database connection established successfully");
})

const sem1Router = require('./routes/sem1');
const studentRouter = require('./routes/students');
const userRouter = require('./routes/user');

app.use('/sem1',sem1Router);
app.use('/students',studentRouter);
app.use('/user',userRouter);

app.listen(port,()=>
{
    console.log(`Server is running on port :  ${port}`)
});