import React from 'react';
import Game from '../components/Game';

function App() {
  return (
      <div className="App">
          <!--Titulo (añadir header, con menu incluyendo como jugar y botones necesarios)-->
          <h1>Minijuego de Dibujo con Turtle</h1>

          <!--(añadir footer)-->
          <p>Usa las teclas <b>W</b> para avanzar, <b>A</b> para girar a la izquierda, y <b>D</b> para girar a la
              derecha.</p>
          <Game/>
      </div>
  );
}

export default App;
