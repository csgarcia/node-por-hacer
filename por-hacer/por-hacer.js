const fs = require('fs');

let listToDo = [];

const saveDb = () => {

    let data = JSON.stringify(listToDo);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('error: ' + err);
    });
};

const initDb = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }

};

const createTask = (desc) => {

    initDb();

    let toDo = {
        desc: desc,
        completed: false
    }

    listToDo.push(toDo);
    saveDb();

    return toDo;
};

const listTasks = () => {
    initDb();
    return listToDo;
};

const updateTask = (desc, completed = true) => {
    initDb();
    let index = listToDo.findIndex(task => {
        return task.desc === desc; // if this doesn't find and index, it returns -1
    });

    if (index >= 0) {
        listToDo[index].completed = completed;
        saveDb();
        return true;
    } else {
        return false;
    }

};

const deleteTask = (desc) => {
    initDb();
    let index = listToDo.findIndex(task => {
        return task.desc === desc; // if this doesn't find and index, it returns -1
    });

    if (index >= 0) {
        listToDo.splice(index, 1);
        saveDb();
        return true;
    } else {
        return false;
    }

}

module.exports = {
    createTask,
    listTasks,
    updateTask,
    deleteTask
}