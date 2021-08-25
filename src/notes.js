const chalk = require('chalk')
const { load, save } = require('./dataManager')

function add(title, body) {
  const notes = load()
  const newNote = { title, body }
  const found = notes.find(note => note.title === title && note.body === body)
  if (!found) {
    notes.push(newNote)
    save(notes)
    console.log(chalk.green.inverse("New note added!"))
  } else {
    console.log(chalk.red.inverse('This note already be taken!'))
  }
}

function remove(title) {
  const notes = load()
  const updatedNotes = notes.filter(note => note.title !== title)
  const wasRemoved = notes.length > updatedNotes.length
  if (wasRemoved) {
    save(updatedNotes)
    console.log(chalk.green.inverse(`The note ${title} has been removed`))
  } else {
    console.log(chalk.red.inverse(`The note ${title} wasn't found`))
  }
}

function read(title) {
  const notes = load()
  const foundNote = notes.find(note => note.title === title)
  console.log('Reading ...')
  console.log(chalk.inverse(foundNote.title))
  console.log(foundNote.body)
}

function list() {
  const notes = load();
  console.log(chalk.inverse('Listing notes ... '))
  console.table(notes)
}

module.exports = {
  add, remove, read, list
}