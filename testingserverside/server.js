import express from "express";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js';
import categoryRoutes from './routes/categoryRoute.js';
import productRoutes from './routes/productRoutes.js';
import fileUpload from 'express-fileupload';
import Notes from './routes/note.js';
import cors from "cors";
import path from 'path';
import { getDocument, updateDocument } from "./controller/docscontroller.js";
import { Server } from 'socket.io';

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
app.use('/api/notes', Notes);

const PORT = process.env.PORT || 8080;
app.get('/', (req,res) =>{
    res.send("hello world lets you we dev together");
})

const server = app.listen(PORT, () => {
    console.log(`SERVER RUNNING on ${process.env.DEV_MODE} mode on port ${PORT}`);
});

const io = new Server(server, {
    cors: {
        origin: '*', // Allow requests from any origin, you might want to restrict this to your frontend domain in production
        methods: ['GET', 'POST']
    }
});

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on("connection", (socket) => {
    console.log(`Socket Connected`, socket.id);

    // Handle Google Docs management
    socket.on('get-document', async documentId => {
        const document = await getDocument(documentId);
        socket.join(documentId);
        socket.emit('load-document', document.data);

        socket.on('send-changes', delta => {
            socket.broadcast.to(documentId).emit('receive-changes', delta);
        });

        socket.on('save-document', async data => {
            await updateDocument(documentId, data);
        });
    });

    // Handle video call functionality
    socket.on("room:join", (data) => {
        const { email, room } = data;
        emailToSocketIdMap.set(email, socket.id);
        socketidToEmailMap.set(socket.id, email);
        io.to(room).emit("user:joined", { email, id: socket.id });
        socket.join(room);
        io.to(socket.id).emit("room:join", data);
    });

    socket.on("user:call", ({ to, offer }) => {
        io.to(to).emit("incomming:call", { from: socket.id, offer });
    });

    socket.on("call:accepted", ({ to, ans }) => {
        io.to(to).emit("call:accepted", { from: socket.id, ans });
    });

    socket.on("peer:nego:needed", ({ to, offer }) => {
        console.log("peer:nego:needed", offer);
        io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
    });

    socket.on("peer:nego:done", ({ to, ans }) => {
        console.log("peer:nego:done", ans);
        io.to(to).emit("peer:nego:final", { from: socket.id, ans });
    });
});
