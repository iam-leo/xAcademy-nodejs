import { Sequelize } from "sequelize";

const db = new Sequelize({
    host: '127.0.0.1',
    database: 'librerias',
    username: 'root',
    password: 'root',
    port: 3306,
    dialect: 'mysql'
});

export { db }