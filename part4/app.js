import express from 'express';
const app = express()
import cors from 'cors';
import mongoose from 'mongoose';
import blogRouter from './routes/blog.route.js';



// const mongoUrl = 'mongodb://localhost/bloglist'
// mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())

app.use('/api/blog', blogRouter);



export default app;