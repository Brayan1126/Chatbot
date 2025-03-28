import React, {useState, useEffect} from "react";
import axios from "axios";
import "./chatbot.css";

const Chatbot = () => {
    const [ chats , setChats ] = useState([]);
    const [ query, setQuery ] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:5000/api/chats")
        .then((res) => {setChats(res.data);})
        .catch((error) => {console.error("Error al obtener los mensajes: ", error);});
    }, []);

    const handleChat = () => {
        if (!query.trim()) return;
        setMessages((prev) => [...prev, { role: "user", text: query }]);

        const found = chats.find((chat) => chat.question.toLowerCase() === query.toLowerCase());

        setMessages((prev) => [...prev, { role: "boot", text: found ? found.answer : "No encontré una respuesta adecuada" }]);
        setQuery("");
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleChat();
        }
    }

    return (
        <div className="chat-container">
        <div className="chat-messages">
            {messages.map((msg, idx) => (
                <div key={idx} className={`message.bubble ${
                    msg.role === "user" ? "user-bubble" : "bot-bubble"}`}>
                    {msg.text}
                </div>
            ))}
        </div>

        <div className="chat-input">
            <input
            type="text"
            placeholder="Escribe un mensaje"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            />
            <button onClick={handleChat}>Send</button>
        </div>
        </div>
    )

}

export default Chatbot;