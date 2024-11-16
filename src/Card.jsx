import React from "react";

function Card({ card, setCards }) {
  function onClickHandler(id) {
    alert("Работаю !!!! ");

    // setCards(10)
    //  setCards((prev)=> [...prev, {title: "Новая карточка"}])

    setCards((prev) => prev.filter((card) => id !== card.id && card));
  }
  return (
    <div>
     
      <div>
        <h3>{card.title}</h3>
        <button onClick={() => onClickHandler(card.id)} type="button">
          Удалить
        </button>
      </div>
    </div>
  );
}

export default Card;
