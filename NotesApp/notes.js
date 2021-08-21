const fs = require('fs');
const chalk = require('chalk')

const getNotes = () =>  'Your notes...'

const addNote = (title,body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(note => note.title === title)
    if(duplicateNotes.length != 0){
        console.log(chalk.red('Note title taken!')); 
    }
    else{
        notes.push({
            title: title,
            body: body
        });
    saveNotes(notes);
    console.log(chalk.green('New note added!'));
    }
    
}

const removeNote = title => {
    const notes = loadNotes();
    //MY WAY:
    // const removeNote = notes.filter((note,index)=>{
        
    //     if(note.title === title){
    //         notes.splice(index,1);
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // });
    // if(removeNote.length != 0){
    //     console.log(chalk.green('Note removed!'));
    // }
    // else{
    //     console.log(chalk.red('No note with such a title found!'));
    // }
    // saveNotes(notes);

    //HighWAY:
    const notesToKeep = notes.filter(note=> note.title != title)
    if(notes.length === notesToKeep.length){
        console.log(chalk.red('No note found!'));
    }else{
        console.log(chalk.green('Note Removed!'));
        saveNotes(notesToKeep);
    }
}

const listNotes = () =>{
    const notes = loadNotes();
    if(notes.length!= 0){
        console.log(chalk.inverse('Your Notes: '))
        notes.forEach((note,index) => {
            console.log(chalk.green('\nNote #'+ (index+1) + '\nTitle: ' + note.title + '\nContent: ' + note.body+'\n'));
            if(index<(notes.length-1)){
                console.log("=============================================================");
            }

        })
    }
    else{
        console.log(chalk.red('No Note added yet!'));
    }
}
const saveNotes = notes => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',notesJSON);
}

const loadNotes = () =>{
    try{
        const bufferData = fs.readFileSync('notes.json');
        const notesJSON = bufferData.toString();
        return JSON.parse(notesJSON);
    }catch(e){
        return [];
    }
}
module.exports= {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes
}

