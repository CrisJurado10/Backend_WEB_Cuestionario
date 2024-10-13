import React, { useState } from 'react';

const QuestionForm = () => {
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctOption, setCorrectOption] = useState(1);
  const [message, setMessage] = useState(''); // Estado para el mensaje

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const questionData = {
      question_text: questionText,
      option_1: options[0],
      option_2: options[1],
      option_3: options[2],
      option_4: options[3],
      correct_option: correctOption,
    };

    try {
      const response = await fetch('http://localhost:5000/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(questionData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data); // Mostrar mensaje de éxito
      setMessage('Pregunta creada correctamente'); // Mensaje de éxito
      // Resetear el formulario
      setQuestionText('');
      setOptions(['', '', '', '']);
      setCorrectOption(1); // Resetear a la primera opción como correcta
    } catch (error) {
      console.error('Error creando la pregunta:', error);
      setMessage('Error al crear la pregunta'); // Mensaje de error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Pregunta</h2>
      <input
        type="text"
        placeholder="Pregunta"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        required
      />
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`Opción ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            required
          />
        </div>
      ))}
      <div>
        <label>Opción correcta:</label>
        <select value={correctOption} onChange={(e) => setCorrectOption(Number(e.target.value))}>
          <option value={1}>Opción 1</option>
          <option value={2}>Opción 2</option>
          <option value={3}>Opción 3</option>
          <option value={4}>Opción 4</option>
        </select>
      </div>
      <button type="submit">Crear Pregunta</button>
      {message && <p>{message}</p>} {/* Mostrar el mensaje */}
    </form>
  );
};

export default QuestionForm;
