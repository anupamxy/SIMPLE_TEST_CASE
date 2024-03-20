import  express from 'express';
const router = express.Router();
import {  requireSignIn,isAdmin } from "../middleware/authMiddleware.js";
import Note from '../models/note.js';
import { body, validationResult } from 'express-validator';

// Route to fetch all the notes for a user: GET "/api/notes/fetchallnotes" (login required)
router.get('/fetchallnotes', async (req, res) => {
   
    try {

        const notes = await Note.find({ user: req.username});
        res.json(notes);
       
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

// Route to add a new note: POST "/api/notes/addnote" (login required)
router.post('/addnote', [
    body('username', 'Enter a valid UserName').isLength({ min: 2 }),
    body('name', 'Enter a valid name').isLength({ min: 2 }),
    body('inemail', 'Enter a valid email').isLength({ min: 2 }),
    body('phone', 'Enter valid phone number').isLength({ min: 2 }),
], async (req, res) => {
    try {
        const { username, name, inemail, phone } = req.body;
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            username,
            name,
            inemail,
            phone,
            user:req.username
           
        });

        const savedNote = await note.save();
        res.json({ savedNote });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error');
    }
});

// Routes to update an existing note: PUT "/api/notes/updatenote/:id" (login required)
router.put('/updatenote/:id', async (req, res) => {
    const { username, name, inemail, phone } = req.body;
    try {
        const newNote = {};
        if (username) newNote.username = username;
        if (name) newNote.name = name;
        if (inemail) newNote.inemail = inemail;
        if (phone) newNote.phone = phone;

        let note = await Note.findById(req.params.id);
        if (!note) return res.status(404).send('Not Found');

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send('Not allowed');
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error');
    }
});

// Route to delete an existing note: DELETE "/api/notes/deletenote/:id" (login required)
router.delete('/deletenote/:id', async (req, res) => {
    try {
        let note = await Note.findById(req.params.id);
        console.log(note);
        if (!note) return res.status(404).send('Not Found');

        // if (note.user.toString() !== req.user.id) {
        //     return res.status(401).send('Not allowed');
        // }

        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ Success: 'Note has been deleted', note: note });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error');
    }
});

export default router;