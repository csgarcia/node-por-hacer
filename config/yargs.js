const description = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
}

const completed = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        description // description = description
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        description, // description = description
        completed // completed = completed
    })
    .command('borrar', 'Elimina una tarea', {
        description // description = description
    }).help().argv;

module.exports = {
    argv
}