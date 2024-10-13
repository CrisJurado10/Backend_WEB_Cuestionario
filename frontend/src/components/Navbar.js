// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de importar el archivo CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/create">Crear Pregunta</Link></li>
        <li><Link to="/questions">Ver Preguntas</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
