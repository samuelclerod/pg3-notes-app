const chalk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const { add, list, read, remove } = require('./src/notes')

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
  handler: argv => add(argv.title, argv.body)
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
  handler: argv => remove(argv.title)
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
  handler: argv => read(argv.title)
})

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: () => list()
})

yargs.parse()