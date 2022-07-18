import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [cards, setCards] = useState(
    [
     {
      name: "",
      src: "",      // {pic.jpg}, make sure to import it in
      clicked: false
     },
     {
      name: "",
      src: "",
      clicked: false
     },
     {
      name: "",
      src: "",
      clicked: false
     },
     {
      name: "",
      src: "",
      clicked: false
     },
     {
      name: "",
      src: "",
      clicked: false
     },
     {
      name: "",
      src: "",
      clicked: false
     },
     {
      name: "",
      src: "",
      clicked: false
     },
     {
      name: "",
      src: "",
      clicked: false
     },
     {
      name: "",
      src: "",
      clicked: false
     },
     {
      name: "",
      src: "",
      clicked: false
     },
     {
      name: "",
      src: "",
      clicked: false
     },
     {
      name: "",
      src: "",
      clicked: false
     }
    ]
  )

  return (
    <div id="container">
      <header>
        Naruto Memory Game
      </header>
      <div id="main-content">
        <div id="scoreboard">
          <p>Score:</p>
          <p>High score:</p>
        </div>
        <div id="game">
          <p>Game</p>
        </div>
      </div>
      <footer>
        Developed by Ktavean, 2022.
      </footer>
    </div>
  )

}

export default App;