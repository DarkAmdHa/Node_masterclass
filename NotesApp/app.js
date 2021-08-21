const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0');
//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOptrion: true,
            type: 'string'
        },
        body: {
         describe: 'Note Content',
         demandOption: true,
         type: 'string'   
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body);    
    }
});

//Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of the note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
    }
});
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){console.log('Here are all the notes:')}
});

yargs.command({
   command: 'read',
   describe: 'Read A note',
   handler: function(){console.log('Note Reads: ')} 
});
//add,remove,read,list
yargs.parse();
