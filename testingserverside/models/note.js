import mongoose from "mongoose";
const { Schema } = mongoose;

// Schema
const NotesSchema = new Schema({
    // User ID
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    // Username
    username: {
        type: String,
        required: true
    },
    // Name of the note
    name: {
        type: String,
        required: true
    },
    // Email associated with the note
    inemail: {
        type: String,
        required: true,
    },
    // Phone number associated with the note
    phone: {
        type: Number,
        required: true,
    },
    review:{
        type:String,
        required:true,

    },
    // Date of creation or modification
    date: {
        type: Date,
        default: Date.now
    }
}, {
    // Automatically add createdAt and updatedAt fields
    timestamps: true,
});

// Export the model
export default mongoose.model('notes', NotesSchema);
