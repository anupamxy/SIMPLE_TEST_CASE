import express from "express";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js';
import categoryRoutes from './routes/categoryRoute.js';
import productRoutes from './routes/productRoutes.js';
import fileUpload from 'express-fileupload';
import cors from "cors";
import path from 'path';


// Configure env
dotenv.config();

connectDB();

const app = express();
app.use(fileUpload());
app.use(cors());
app.use(express.json()); 
app.use(morgan('dev'));

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);


const PORT = process.env.PORT || 8080;
app.get('/', (req,res) =>{
    res.send("hello world lets you we dev together");
})
app.listen(PORT, () => {
    console.log(`SERVER RUNNING on ${process.env.DEV_MODE} mode on port ${PORT}`);
});
