const argv = require('./config/yargs').argv;
const colors = require('colors');
const toDoModule = require('./por-hacer/por-hacer');

let command = argv._[0];

switch (command) {
    case 'crear':
        let task = toDoModule.createTask(argv.description);
        console.log(task);
        break;

    case 'listar':

        let list = toDoModule.listTasks();
        for (let i = 0; i < list.length; i++) {
            let task = list[i];
            console.log("=========Por hacer=========".green);
            console.log(task.desc);
            console.log("Estado: " + task.completed);
            console.log("===========================".green);
        }
        break;

    case 'actualizar':

        let updated = toDoModule.updateTask(argv.description, argv.completed);
        console.log(updated);

        break;

    case 'borrar':

        let deleted = toDoModule.deleteTask(argv.description);
        console.log(deleted);

        break;

    default:
        console.log('Comando no es reconocido');
}