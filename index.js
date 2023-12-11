// import dotenv from "dotenv";
import "dotenv/config.js";
import express from "express";
import cors from "cors";
import db from "./config/database.js";
import UserRoutes from "./routes/UserRoutes.js";
import BookingRoutes from "./routes/BookingRoutes.js";
import ContactRoutes from "./routes/ContactRoutes.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get("/", (req, res) => {
  res.send("api is working");
});
// Route
app.use(UserRoutes);
app.use(BookingRoutes);
app.use(ContactRoutes);

db.sync({ alter: true })
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((error) => {
    console.log(`Unable to connect to database: ${error}`);
  });