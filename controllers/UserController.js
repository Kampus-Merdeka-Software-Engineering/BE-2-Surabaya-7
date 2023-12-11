import db from "../config/database.js";
// import user from "../models/UserModel.js";
import user from "../models/UserModel.js";

export const createUser = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
    } = req.body;

    // Membuat user baru
    const newUser = await user.create({
      username,
      email,
      password,
    });

    // Pesan tambahan untuk respons JSON
    const responseMessage = `Data telah diterima dengan username ${username}`;

    // Mengirim respons JSON dengan pesan tambahan
    res.status(201).json({ message: responseMessage });
  
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getUserByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    const user = await user.findOne({
      where: { username },
      attributes: { exclude: ["user_id", "password", "createdAt", "updatedAt"] },
    });

    if (!user) {
      return res.status(404).json({ error: "User tidak ditemukan" });
    }

    // Pesan tambahan untuk respons JSON
    const responseMessage = `User dengan Username ${username}`;

    // Mengirim respons JSON dengan pesan tambahan dan status 200
    res.status(200).json({ message: responseMessage, user });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};