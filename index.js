// import dotenv from "dotenv";
import "dotenv/config.js";
import express from "express";
import cors from "cors";
import db from "./config/database.js";
import UserRoutes from "./routes/UserRoutes.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

// Route
app.use(UserRoutes);

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