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

module.exports = {
  save: saveData,
  load: loadData
}