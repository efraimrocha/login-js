/* eslint-disable linebreak-style */
/* eslint-disable indent */
const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks[0];
};

module.exports = {
    getAll
};