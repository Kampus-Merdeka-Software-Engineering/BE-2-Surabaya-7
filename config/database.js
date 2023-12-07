import { Sequelize } from "sequelize";
import "dotenv/config.js"

const db = new Sequelize('users', 'root', 'qwerty0403', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});


export default db;