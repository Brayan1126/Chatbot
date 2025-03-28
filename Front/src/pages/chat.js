import React from "react";
import { useNavigate } from "react-router-dom"
import Chatbot from "../components/chatbot";

const Chat = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Chat</h2>
            <button onClick={() => navigate("/")} className="btn btn-primary">Volver</button>
            <Chatbot />
        </div>
    )
}

export default Chat;