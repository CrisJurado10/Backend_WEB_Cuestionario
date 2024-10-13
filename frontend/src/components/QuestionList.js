// src/components/QuestionList.js
import React, { useEffect, useState } from 'react';
import './QuestionList.css'; // Asegúrate de importar el archivo CSS

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:5000/questions');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data fetched:', data);
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="question-list">
      <h2>Lista de Preguntas</h2>
      {questions.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Pregunta</th>
              <th>Opción 1</th>
              <th>Opción 2</th>
              <th>Opción 3</th>
              <th>Opción 4</th>
              <th>Correcta</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question) => (
              <tr key={question.id}>
                <td>{question.id}</td>
                <td title={question.question_text} className="question-text">
                  {question.question_text}
                </td>
                <td>{question.option_1}</td>
                <td>{question.option_2}</td>
                <td>{question.option_3}</td>
                <td>{question.option_4}</td>
                <td>{question.correct_option}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay preguntas disponibles.</p>
      )}
    </div>
  );
};

export default QuestionList;
