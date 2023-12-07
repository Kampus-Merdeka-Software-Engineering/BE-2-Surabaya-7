import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Order = db.define("orders", {
  order_id: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderNumber: {
    type: DataTypes.STRING,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  origin: {
    type: DataTypes.STRING,
  },
  destination: {
    type: DataTypes.STRING,
  },
  date_time: {
    type: DataTypes.DATE,
  },
  price: {
    type: DataTypes.STRING,
  },
  total_passanger: {
    type: DataTypes.STRING,
  },
});


export default Order;