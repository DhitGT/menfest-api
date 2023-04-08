import { Sequelize } from "sequelize";

const db = new Sequelize('menfest_db','root','', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;