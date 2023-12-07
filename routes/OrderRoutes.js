import express from "express";
const router = express.Router();
import {
  createOrder,
  getOrderByOrderNumber,
} from "../controllers/OrderController.js";

router.post("/order", createOrder);
router.get("/order/:orderNumber", getOrderByOrderNumber);

export default router;