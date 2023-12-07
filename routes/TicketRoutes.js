import express from "express";
const router = express.Router();
import {
  createTicket,
  getTicketByTicketNumber,
} from "../controllers/TicketController.js";

router.post("/ticket", createTicket);
router.get("/ticket/:ticketNumber", getTicketByTicketNumber);

export default router;