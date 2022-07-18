import React from "react";
import "./Cards.css";
import uniqid from "uniqid";


const Cards = (props) => {

    const cards = props.card_data;
    const handleClick = props.handleClick;

    const cardArr = cards.map((card, i) => {
        return (
            <div className="card" id={`card${i}`} onClick={e => handleClick(e)} key={uniqid()}>
                <img id={`card${i}`} src={card.src} alt={`card${i}`} key={uniqid()} />
                <p id={`card${i}`} key={uniqid()}>{card.name}</p>
            </div>
        )
    })
    
    return (
        <div id="cards">
            {cardArr}
        </div>
    )   
}

export default Cards;