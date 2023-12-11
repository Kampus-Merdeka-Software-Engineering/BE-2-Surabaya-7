import db from "../config/database.js";
import Booking from "../models/BookingModel.js";

// Fungsi untuk menghasilkan nomor tiket secara otomatis
export const generateTicketNumber = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const ticketNumberLength = 8;
  
    let ticketNumber = '';
    for (let i = 0; i < ticketNumberLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      ticketNumber += characters.charAt(randomIndex);
    }
  
    return ticketNumber;
  };
  
export const createBooking = async (req, res) => {
  try {
    const ticketNumber = generateTicketNumber();
    const {
      salutation,
      name,
      email,
      phone_number,
      from,
      to,
      date,
      // departure,
      // arrival,
      passangers,
      totalPrice,
    } = req.body;

    // Membuat booking baru
    const newBooking = await Booking.create({
        ticketNumber,
        salutation,
        name,
        email,
        phone_number,
        from,
        to,
        date,
        // departure,
        // arrival,
        passangers,
        totalPrice,
    });

    // Pesan tambahan untuk respons JSON
    const responseMessage = `Data Booking telah diterima dengan nomor tiket ${ticketNumber}`;

    // Mengirim respons JSON dengan pesan tambahan
    res.status(201).json({ message: responseMessage });
  
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getBookingByTicketNumber = async (req, res) => {
  try {
    const { ticketNumber } = req.params;

    const booking = await Booking.findOne({
      where: { ticketNumber },
      attributes: { exclude: ["booking_id", "createdAt", "updatedAt"] },
    });

    if (!booking) {
      return res.status(404).json({ error: "Booking tidak ditemukan" });
    }

    // Pesan tambahan untuk respons JSON
    const responseMessage = `Booking dengan nomor tiket ${ticketNumber}`;

    // Mengirim respons JSON dengan pesan tambahan dan status 200
    res.status(200).json({ message: responseMessage, booking });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};