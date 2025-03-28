import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddQuestions = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [options, setOptions] = useState("");
    const [correctOption, setCorrectOption] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/chats/add", { question, answer });
            alert("Question added successfully");
            setQuestion("");
            setAnswer("");
        } catch (error) {
            console.error("Error al guardar la pregunta: ", error);
        }
    };

    return (
        <div>
            <h2>Add Questions</h2>
            <button onClick={() => navigate("/")} className="btn btn-primary">Back</button>
            <form onSubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="question">Question</label>
                <input 
                type="text"
                className="form-control"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="answer">Answer</label>
                <input 
                type="text"
                className="form-control"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Question</button>
            </form>
        </div>
    )
}

export default AddQuestions;
