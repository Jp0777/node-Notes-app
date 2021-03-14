const chalk = require("chalk");
const fs = require("fs");



const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => {
        return note.title === title;
    })

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green("New Note Added"));
    }
    else {
        console.log("Note title taken");
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const find = notes.find((note) => {
        return title === note.title;
    })
    if (find)
        console.log(`${chalk.green.inverse("Your Note..")}
${find.title} ${find.body}`)
    else
        console.log(chalk.red.inverse("No Note Found."));
}

const listNotes = () => {
    console.log(chalk.blue.inverse("Your Notes"))
    const list = loadNotes();
    list.map((list) => {
        console.log(list.title);
    })
}
const removeNote = (title) => {
    const notes = loadNotes();
    if (notes.length === 0)
        console.log(chalk.green("No notes available"))
    else {
        const notesToKeep = notes.filter((note) => {
            return note.title !== title;
        })
        if (notesToKeep.length < notes.length) {
            console.log(chalk.green("note removed"));
            saveNotes(notesToKeep);
        }
        else {
            console.log(chalk.red("note not found"));
        }

    }

}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJson);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch (e) {
        return [];
    }

}
module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

