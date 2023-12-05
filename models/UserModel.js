import { DataTypes } from "sequelize";
import db from "../config/database.js";

const user = db.define("users", {
  user_id: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});


export default user;