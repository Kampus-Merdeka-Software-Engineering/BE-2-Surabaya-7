import express from "express";
const router = express.Router();
// import {
//   createUser,
//   getUsersByUsername,
// } from "../controllers/UserController.js";

import { getUserByUsername } from '../controllers/UserController.js';
import { createUser } from '../controllers/UserController.js';

router.get('/users', getUserByUsername);
router.post("/user", createUser);
router.get("/user/:username", getUserByUsername);

export default router;