import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Button";
import Card from "./Card";

const demoCards = [
  {
    id: 1,
    title: "Первая карточка",
    price: 1000,
  },
  {
    id: 2,
    title: "Вторая карточка",
    price: 1,
  },
  {
    id: 3,
    title: "Третья карточка",
    price: 2,
  },
];

function App() {
  const [cards, setCards] = useState(demoCards);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  function onSubmitHandler(event) {
    event.preventDefault();
    // собрать данные из формы
    // объект с данными добавить в состояние

    setCards((prev) => [...prev, { id: 0, title, price }]);
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <input
          type="text"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        ></input>
        <button type="submit">Добавить </button>
      </form>
      {cards.map((card) => (
        <Card key={card.id} card={card} setCards={setCards} />
      ))}
    </>
  );
}

export default App;
