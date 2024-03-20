import React, { useState } from "react";
import noteContext from "./Notecontext";

const NoteState = (props) => {
    const host = 'http://localhost:8080';

    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial);

    // Get the auth token from localStorage
    const authToken = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).token : null;


    // Get all Notes
    const getNotes = async () => {
        // API call
        
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken
            },
        });

        const json = await response.json();
        console.log(json);
        setNotes(json);
    };

    // Add a Note
    const addNote = async (username, name, inemail, phone) => {
        console.log(authToken);
        // API call
        const response = await fetch(`${host}/api/notes/addnote`, {
           
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "auth-token": authToken
            },
            body: JSON.stringify({ username, name, inemail, phone }), 
        });

        const note = await response.json();
        setNotes([...notes, note]);
        getNotes(); // Refresh notes after adding
    };

    // Delete a Note
    const deleteNote = async(id) => {
        // API call
        await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken
            }
        });
        const newNotes = notes.filter((note) => note._id !== id);
        setNotes(newNotes);
    };

    // Edit a Note
    const editNote = async (id, username, name, inemail, phone) => {
        // API call
        await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken
            },
            body: JSON.stringify({ username, name, inemail, phone })
        });
        const newNotes = notes.map(note => {
            if (note._id === id) {
                return { ...note, username, name, inemail, phone };
            }
            return note;
        });
        setNotes(newNotes);
    };

    return (
        <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </noteContext.Provider>
    );
};

export default NoteState;
