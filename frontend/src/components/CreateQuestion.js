import React, { useState } from 'react';
import axios from 'axios';
import './CreateQuestion.css';


const CreateQuestion = () => {
    const [question, setQuestion] = useState({
        question_text: '',
        option_1: '',
        option_2: '',
        option_3: '',
        option_4: '',
        correct_option: ''
    });

    const handleChange = (e) => {
        setQuestion({
            ...question,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/questions', question)
            .then(response => {
                console.log('Pregunta creada:', response.data);
            })
            .catch(error => {
                console.error('Error al crear la pregunta:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2>Crear Nueva Pregunta</h2>
            <div className="input-group">
                <label>Pregunta:</label>
                <input
                    type="text"
                    name="question_text"
                    value={question.question_text}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group">
                <label>Opción 1:</label>
                <input
                    type="text"
                    name="option_1"
                    value={question.option_1}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group">
                <label>Opción 2:</label>
                <input
                    type="text"
                    name="option_2"
                    value={question.option_2}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group">
                <label>Opción 3:</label>
                <input
                    type="text"
                    name="option_3"
                    value={question.option_3}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group">
                <label>Opción 4:</label>
                <input
                    type="text"
                    name="option_4"
                    value={question.option_4}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group correct-option">
                <label>Opción correcta (1-4):</label>
                <input
                    type="text"
                    name="correct_option"
                    value={question.correct_option}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Crear Pregunta</button>
        </form>
    );
};

export default CreateQuestion;
