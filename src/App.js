import React, { useState, useEffect } from "react";
import logo from "./Assets/Images/logo.png";
import naruto from "./Assets/Images/cards/naruto.jpg";
import sasuke from "./Assets/Images/cards/sasuke.jpg";
import itachi from "./Assets/Images/cards/itachi.jpg";
import sakura from "./Assets/Images/cards/sakura.png";
import obito from "./Assets/Images/cards/obito.jpg";
import jiraiya from "./Assets/Images/cards/jiraiya.jpg";
import madara from "./Assets/Images/cards/madara.jpg";
import akamaru from "./Assets/Images/cards/akamaru.jpg";
import kurama from "./Assets/Images/cards/kurama.jpg";
import orochimaru from "./Assets/Images/cards/orochimaru.jpg";
import shikamaru from "./Assets/Images/cards/shikamaru.png";
import kakashi from "./Assets/Images/cards/kakashi.jpg";
import "./App.css";
import Cards from "./Components/Cards";

const App = () => {
  const [game, setGame] = useState(
    {
      score: 0,
      highscore: 0,
      cards: [
        {
          name: "Naruto Uzumaki",
          src: naruto,
          clicked: false
        },
        {
          name: "Sasuke Uchiha",
          src: sasuke,
          clicked: false
        },
        {
          name: "Itachi Uchiha",
          src: itachi,
          clicked: false
        },
        {
          name: "Sakura Haruno",
          src: sakura,
          clicked: false
        },
        {
          name: "Obito Uchiha",
          src: obito,
          clicked: false
        },
        {
          name: "Jiraiya Ogata",
          src: jiraiya,
          clicked: false
        },
        {
          name: "Madara Uchiha",
          src: madara,
          clicked: false
        },
        {
          name: "Akamaru",
          src: akamaru,
          clicked: false
        },
        {
          name: "Kurama",
          src: kurama,
          clicked: false
        },
        {
          name: "Orochimaru",
          src: orochimaru,
          clicked: false
        },
        {
          name: "Shikamaru Nara",
          src: shikamaru,
          clicked: false
        },
        {
          name: "Kakashi Hatake",
          src: kakashi,
          clicked: false
        }
      ]
    }
  )

  useEffect(() => {


    const gameCards = [];

    for (let i = 0; i < game.cards.length; i++) {
      let insertAt = Math.floor(Math.random() * 12);
      gameCards.splice(insertAt, 0, game.cards[i]);
    }

    setGame(
      {
        ...game,
        cards: gameCards
      }
    )


  }, [game.score]);

  const handleClick = (img) => {
    const id = img.target.id.slice(4);
    if (game.cards[id].clicked === false) {
      const newGameCards = game.cards.slice();
      newGameCards[id].clicked = true;
      setGame(
        {
          ...game,
          score: game.score + 1,
          cards: newGameCards
        }
      )
    } else if (game.cards[id].clicked === true) {
      const newGameCards = game.cards.slice();
      for (let card of newGameCards) {
        card.clicked = false;
      }
      setGame(
        {
          score: 0,
          highscore: game.score,
          cards: newGameCards
        }
      )
    }
  }

  return (
    <div id="container">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <div id="main-content">
        <div id="scoreboard">
          <p>Score: {game.score}</p>
          <p>High score: {game.highscore}</p>
        </div>
        <Cards card_data={game.cards} handleClick={handleClick} />
      </div>
      <footer>
        Developed by Ktavean, 2022.
      </footer>
    </div>
  )

}

export default App;