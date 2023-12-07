import { Sequelize } from "sequelize";
import "dotenv/config.js"

const db = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
    port: process.env.DATABASE_PORT,
  }
);

export default db;

// import { Sequelize } from "sequelize";
// import "dotenv/config.js"

// const db = new Sequelize('users', 'root', 'qwerty0403', {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: 3306,
// });


// export default db;