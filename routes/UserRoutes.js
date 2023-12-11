import express from "express";
const router = express.Router();
import {
  createUser,
  getUserByUsername,
} from "../controllers/UserController.js";

// import { getUserByUsername } from '../controllers/UserController.js';
// import { createUser } from '../controllers/UserController.js';

router.post("/user", createUser);
router.get("/user/:username", getUserByUsername);

export default router;