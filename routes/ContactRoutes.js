import express from "express";
const router = express.Router();
import {
  createContact
} from "../controllers/ContactController.js";

router.post("/contactUs", createContact);

export default router;