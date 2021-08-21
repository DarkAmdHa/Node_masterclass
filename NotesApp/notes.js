const fs = require('fs');
const { parsed } = require('yargs');
const getNotes = () => {return 'Your notes...'};

const addNote = (title,body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function(note) {
        return note.title === title;
    });
    if(duplicateNotes.length != 0){
        console.log('Note title taken') 
    }
    else{
        notes.push({
            title: title,
            body: body
        });
    saveNotes(notes);
    console.log('New note added!')
    }
    
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',notesJSON);
}

const loadNotes = () => {
    try{
        const bufferData=  fs.readFileSync('notes.json');
        const JSONdata = bufferData.toString();
        return JSON.parse(JSONdata);
    }catch(e){
        return [];
    }
}
module.exports= {
    getNotes:getNotes,
    addNote:addNote
}

