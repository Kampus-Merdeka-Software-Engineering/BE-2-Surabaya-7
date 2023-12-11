import express from "express";
const router = express.Router();
import {
  createBooking,
  getBookingByTicketNumber,
} from "../controllers/BookingController.js";

router.post("/bookconfirm", createBooking);
router.get("/myPurchase/:ticketNumber", getBookingByTicketNumber);

export default router;