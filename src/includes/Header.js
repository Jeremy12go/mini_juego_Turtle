import React from 'react';
import '../css/style.css';

// Información adicional o comentarios sobre el componente
// Archivo: Header.js
// Propósito: Titular y menú de opciones
// Descripción: Este fragmento proporciona el encabezado de la web para intercambiar pestañas
// Fecha de creación: Septiembre 2024
// Autor: Jeremi Arriagada

const Header = () => {
    return (
        <header>
            {/* Contenido de header.html pegado aquí */}
            <h1>Draw by Turtle</h1>
            <nav>
                <ul>
                    {/*generar un lobby con alguna gif*/}
                    <a href="">Lobby</a>
                    {/* juego */}
                    <a href="">Partida actual</a>
                    {/* instrucciones y ayudas*/}
                    <a href="">Instrucciones</a>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
