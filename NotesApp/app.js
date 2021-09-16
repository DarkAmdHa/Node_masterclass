const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Customize Yargs Version
yargs.version('1.1.0');

//create Add Comand

yargs.command({
   command: 'add',
   describe: 'Add a new note',
   builder: {
       title: {
           describe: 'Note Title',
           demandOption: true,
           type: 'string'
       },
       body: {
           describe: 'Note Contents',
           demandOption:true,
           type: 'string'
       }
   },
   handler(argv){
       notes.addNote(argv.title,argv.body);
   } 
});

//Remove
yargs.command({
   command: 'remove',
   describe: 'Remove a note',
   builder:{
       title:{
           describe: 'Name of the note to remove',
           demandOption: 'true',
           type: 'string'
       }
   },
   handler(argv){
       notes.removeNote(argv.title);
   } 
});

//read
yargs.command({
    command: 'read',
    describe: 'Read A Note',
    builder:{
        title:{
            describe:'Title of the note to be read',
            demandOption: 'true',
            tpye: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});

//List
yargs.command({
    command: 'list',
    describe: 'List All Notes',
    handler(){
        notes.listNotes();
    }
});
//add,remove,read,list

yargs.parse();
