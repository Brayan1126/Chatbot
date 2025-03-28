import React from "react";
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>CHATBOT EN MERN</h2>
            <button onClick={() => navigate("/add")} className="btn btn-primary">Agregar preguntas</button>
            <button onClick={() => navigate("/chat")} className="btn btn-primary">Usar chat</button>
        </div>
    )
}

export default Home;