import express from 'express';
import mongoose from 'mongoose';  //library to connext with mongodb
//Routers
import userRouter from './routes/user.js'
import postRouter from './routes/postRoute.js'
import commentRouter from './routes/commentRoute.js'
import likeRouter from './routes/likesRoutes.js'
import cors from 'cors' //cors for accessing frontend data

const app = express();
app.use(cors()) //use as middlewre


app.use(express.json({ limit: "10mb" })); //access data that comes from body middleware
app.use(express.urlencoded({ extended: true }));
//use all routers
app.use('/api',userRouter)
app.use('/api',postRouter)
app.use('/api',commentRouter)
app.use('/api',likeRouter)

const startServer = async () => {
  try {
    await mongoose.connect(process.env.DBURI||'mongodb://localhost:27017/userPost');
    console.log('MongoDB connected');
    
    app.listen(process.env.PORT||4000, () => {
      console.log('Server listening on port 4000');
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};




startServer();
