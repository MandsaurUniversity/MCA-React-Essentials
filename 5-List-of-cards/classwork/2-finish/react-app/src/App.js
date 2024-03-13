import React, { useState } from 'react';
import './App.css';
import Card from './Card';
function App() {
  const [cards, setCards] = useState([
    {
      id: 'asdf',
      name: 'Thomas Smith',
      title: 'International Operations Head',
      avatar: 'img_avatar.png'
    },
    {
      id: 'zxcv',
      name: 'Billy Jordan',
      title: 'Android App Developer',
      avatar: 'img_avatar.png'
    },
    {
      id: 'qwer',
      name: 'Jane Hawkins',
      title: 'Creative Lead',
      avatar: 'img_avatar.png'
    },
  ])
  const [name, setName] = useState('Alan Smith')
  const [showCard, setShowCard] = useState(true)
  const toggleShowCard = () => setShowCard(!showCard)
  const deleteCardHandler = (cardIndex) => {
    const cards_copy = [...cards]
    cards_copy.splice(cardIndex, 1)
    setCards(cards_copy)
  }

  const cardsMarkup = showCard && (
  cards.map( (card, index) => <Card
    avatar='img_avatar.png'
    name={card.name}
    title= {card.title}
    key = {card.id}
    onDelete={ () => deleteCardHandler(index) }
  />)
  )
  
  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>Toggle show/hide</button>
      {cardsMarkup}
    </div>
  );
}

export default App;
