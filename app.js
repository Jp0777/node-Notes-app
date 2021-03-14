const chalk = require('chalk');
const notesObj = require("./notes");
const yargs = require("yargs");


// const validator = require("validator");
// const fs = require("fs");
// fs.writeFileSync("notes.txt", "This is created by Node js.I am JP.");
// fs.appendFileSync("notes.txt", "Hello from append function ");
// console.log(validator.isEmail("pateljayen07@gmail.com"));
// console.log(process.argv[2]);
// console.log(note());
// console.log(chalk.blue.inverse.bold(note()));

yargs.command({
    command: "add",
    describe: 'Add a new Note',
    builder: {
        title: {
            describe: "Note title",
            demand: true,
            type: "string"
        },
        body: {
            describe: "Body",
            demand: true,
            type: "string"
        }
    },
    handler: (argv) => {
        notesObj.addNotes(argv.title, argv.body);
    }
})

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demand: true,
            type: "string"
        }
    },
    handler: (argv) => {
        notesObj.removeNote(argv.title);
    }
})

yargs.command({
    command: "read",
    describe: "Reading a note",
    builder: {
        title: {
            demand: true,
            type: "string"
        }
    },
    handler(argv) {
        notesObj.readNote(argv.title);
    }
})

yargs.command({
    command: "list",
    describe: "Listing out the notes",
    handler() {
        notesObj.listNotes();
    }
})
yargs.parse();



