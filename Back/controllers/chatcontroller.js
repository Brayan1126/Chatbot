const Chat = require('../models/chat');

exports.addChat = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const newchat = new Chat({ question, answer });
        await newchat.save();
        res.status(201).json(newchat);
    } catch (error) {
        res.status(500).json({ message: "Error al guardar el mensaje" });
    }
}

exports.getChats = async (req, res) => {
    try {
        const chats = await Chat.find();
        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los mensajes" });
    }
}


