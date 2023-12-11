import db from "../config/database.js";
import Contact from "../models/ContactModel.js";

export const createContact = async (req, res) => {
  try {
    const {
      name,
      email,
      number,
      message,
    } = req.body;

    // Membuat Contact Us baru
    const newContact = await Contact.create({
        name,
        email,
        number,
        message,
    });

    // Pesan tambahan untuk respons JSON
    const responseMessage = `Data Contact Us telah diterima`;

    // Mengirim respons JSON dengan pesan tambahan
    res.status(201).json({ message: responseMessage });
  
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};