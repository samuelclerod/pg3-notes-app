const chalk = require('chalk')
const yargs = require('yargs')
const { add } = require('./notes')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      typeof: 'string'
    },
    body: {
      describe: 'Node body content',
      demandOption: true,
      typeof: 'string'
    }
  },
  handler: function ({ title, body }) {
    add(title, body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      typeof: 'string'
    },
  },
  handler: function ({ title }) {
    console.log(chalk.red(`Removing the note with title ${title}!`))
  }
})

yargs.command({
  command: 'read',
  describe: 'Read one single note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      typeof: 'string'
    },
  },
  handler: function ({ title }) {
    console.log(chalk.yellow.inverse(`Reading the note with title ${title}!`))
  }
})

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: function () {
    console.log(chalk.blue("Listing all notes!"))
  }
})


//adicione os comandos list e read

yargs.parse()