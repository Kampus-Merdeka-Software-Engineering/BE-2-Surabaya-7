import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Contact = db.define("contacts", {
contact_id: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  number: {
    type: DataTypes.STRING,
  },
  message: {
    type: DataTypes.TEXT,
  },
});


export default Contact;