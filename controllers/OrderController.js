import db from "../config/database.js";
import Order from "../models/OrderModel.js";


// Fungsi untuk menghasilkan nomor tiket secara otomatis
export const generateOrderNumber = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const orderNumberLength = 8;
  
    let orderNumber = '';
    for (let i = 0; i < orderNumberLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      orderNumber += characters.charAt(randomIndex);
    }
  
    return orderNumber;
  };
  
export const createOrder = async (req, res) => {
  try {
    const orderNumber = generateOrderNumber();
    const {
      name,
      email,
      origin,
      destination,
      date_time,
      price,
      total_passanger,
    } = req.body;

    // Membuat order baru
    const newOrder = await Order.create({
        orderNumber,
        name,
        email,
        origin,
        destination,
        date_time,
        price,
        total_passanger,
    });

    // Pesan tambahan untuk respons JSON
    const responseMessage = `Data telah diterima dengan nomor order ${orderNumber}`;

    // Mengirim respons JSON dengan pesan tambahan
    res.status(201).json({ message: responseMessage });
  
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getOrderByOrderNumber = async (req, res) => {
  try {
    const { orderNumber } = req.params;

    const order = await Order.findOne({
      where: { orderNumber },
      attributes: { exclude: ["order_id", "createdAt", "updatedAt"] },
    });

    if (!order) {
      return res.status(404).json({ error: "Order tidak ditemukan" });
    }

    // Pesan tambahan untuk respons JSON
    const responseMessage = `Order dengan nomor order ${orderNumber}`;

    // Mengirim respons JSON dengan pesan tambahan dan status 200
    res.status(200).json({ message: responseMessage, order });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};