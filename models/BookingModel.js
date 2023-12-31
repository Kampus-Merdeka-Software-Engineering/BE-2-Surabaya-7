import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Booking = db.define("bookings", {
  booking_id: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ticketNumber: {
    type: DataTypes.STRING,
    unique: true,
  },
  salutation: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  phone_number: {
    type: DataTypes.STRING,
  },
  from: {
    type: DataTypes.STRING,
  },
  to: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATEONLY,
  },
  departureTime: {
    type: DataTypes.TIME,
  },
  arrivalTime: {
    type: DataTypes.TIME,
  },
  passengers: {
    type: DataTypes.STRING,
  },
  totalPrice: {
    type: DataTypes.STRING,
  },
});


export default Booking;