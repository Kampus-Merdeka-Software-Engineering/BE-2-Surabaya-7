import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Ticket = db.define("ticket", {
  ticket_id: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ticketNumber: {
    type: DataTypes.STRING,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  NIK: {
    type: DataTypes.STRING,
  },
  no_hp: {
    type: DataTypes.STRING,
  },
});


export default Ticket;