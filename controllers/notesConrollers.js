const mongoose = require("mongoose")
const Notes = require("../models/notes")




// all ther routes controllers below;;;;


// Create a post
exports.createNote = async ()=>{
    try {
       const data = req.body;
       const note = new Notes(data);
       await note.save();
       res.status(200).json(note);
    } catch (err) {
       res.status(400).json({error : err.message});
    }
}

// Retrive all notes
exports.getAllNotes = async ()=>{
    try {
        const notes = await Notes.find();
        res.status(200).json(notes);
    } catch (err) {
       res.status(400).json({error: err.message});
    }
}

exports.getNoteById = async() =>{
    try {
        const note = await Notes.findById(req.param.id);
        res.status(200).json(note);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

exports.updateNoteByID = async()=>{
    try {
       const data = req.body;
       const noteUpdated = await Notes.findByIdAndUpdate(req.param.id,data);
       res.status(202).json(noteUpdated); 
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}