import React from "react";
import "./index.css";

function App() {
  return (
    <div className="container">
      <div className="valid-keys">
        <span className="matched">meti</span>
        <span className="remainder">uZz</span>
      </div>
      <div className="typed-keys">assddfametief</div>
      <div className="completed-words">
        <ol>
          <li>cidade</li>
          <li>carro</li>
          <li>profissional</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
