const fs = require('fs')

function saveData(data) {
  if (!data) return;
  const dataJSON = JSON.stringify(data)
  fs.writeFileSync('./data.json', dataJSON)
}

function loadData() {
  try {
    const dataJSON = fs
      .readFileSync('./data.json')
      .toString()
    const data = JSON.parse(dataJSON);
    return data
  } catch (error) {
    return []
  }
}

function add(title, body) {
  const notes = loadData()
  const newNote = { title, body }
  notes.push(newNote)
  saveData(notes)
  console.log("New note added!")
}

function remove(title) {
}

function read(title) {
}

function list() {
}



module.exports = {
  add, remove, read, list
}