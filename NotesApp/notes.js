const fs = require('fs');
const chalk = require('chalk');
const getNotes = ()=>{
    return 'Your Notes...';
}

const addNote = (title,body)=>{
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('Note Added'));

    }
    else{
        console.log(chalk.red.inverse('Note Title Already Taken'));
    }
}

const removeNote = (title)=>{
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title!=title);
    if(duplicateNotes.length === notes.length){
        console.log(chalk.red.inverse('No note with such title found.'));
    }
    else{
        saveNotes(duplicateNotes);
        console.log(chalk.green.inverse('Note Removed.'));
    }
}

const listNotes = ()=>{
    const notes = loadNotes();
    console.log(chalk.green.inverse('Your Notes: '));
    notes.forEach(note => console.log('\nTitle: ', note.title, '\n'));
}


const readNote = title =>{
    const notes = loadNotes();
    const noteToRead = notes.find(note => note.title === title);
    if(noteToRead){
        console.log('\n');
        console.log(chalk.green('Title: ', noteToRead.title));
        console.log(noteToRead.body, '\n');
    }else{
        console.log(chalk.red.bold.inverse('No note with such a title found.'));
    }
}
const saveNotes = notes =>  fs.writeFileSync('notes.json',JSON.stringify(notes));

const loadNotes = ()=>{
    try{
        const notes = fs.readFileSync('notes.json').toString();
        return JSON.parse(notes);
    }catch(e){
        return [];
    }
}
 
module.exports = {
    getNotes: getNotes,
    addNote:addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};

