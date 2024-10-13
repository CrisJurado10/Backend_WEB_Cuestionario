// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import QuestionForm from './components/QuestionForm';
import QuestionList from './components/QuestionList';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="app-title">Gestor de Preguntas</h1>
        <nav className="navbar">
          <Link to="/" className="nav-link">Crear Pregunta</Link>
          <Link to="/questions" className="nav-link">Ver Preguntas</Link>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<QuestionForm />} />
            <Route path="/questions" element={<QuestionList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
