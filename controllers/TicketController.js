import db from "../config/database.js";
import Ticket from "../models/TicketModel.js";
// import Ticket from "../models/TicketModel.js";


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
  
export const createTicket = async (req, res) => {
  try {
    const ticketNumber = generateTicketNumber();
    const {
      name,
      email,
      NIK,
      no_hp,
    } = req.body;

    // Membuat order baru
    const newTicket = await Ticket.create({
      ticketNumber,
      name,
      email,
      NIK,
      no_hp,
    });

    // Pesan tambahan untuk respons JSON
    const responseMessage = `Data telah diterima dengan nomor tiket ${ticketNumber}`;

    // Mengirim respons JSON dengan pesan tambahan
    res.status(201).json({ message: responseMessage });
  
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getTicketByTicketNumber = async (req, res) => {
  try {
    const { ticketNumber } = req.params;

    const ticket = await Ticket.findOne({
      where: { ticketNumber },
      attributes: { exclude: ["ticket_id", "createdAt", "updatedAt"] },
    });

    if (!ticket) {
      return res.status(404).json({ error: "ticket tidak ditemukan" });
    }

    // Pesan tambahan untuk respons JSON
    const responseMessage = `Ticket dengan nomor tiket ${ticketNumber}`;

    // Mengirim respons JSON dengan pesan tambahan dan status 200
    res.status(200).json({ message: responseMessage, ticket });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};