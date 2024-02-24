import mongoose from "mongoose";
const {Schema} = mongoose;
 
//schema
const NotesSchema = new Schema({
    tittle:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    noteval:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        required: true
    },
    info:{
        type :  String,
        required: true,
    },
    
    somenumber:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default : Date.now
    }
});


export default mongoose.model("plantoday", NotesSchema);