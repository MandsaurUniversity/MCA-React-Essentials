import React, { useState } from 'react';
import './App.css';
import Card from './Card';
function App() {
  const [cards, setCards] = useState([
    {
      name: 'Thomas Smith',
      title: 'International Operations Head',
      avatar: 'img_avatar.png'
    },
    {
      name: 'Billy Jordan',
      title: 'Android App Developer',
      avatar: 'img_avatar.png'
    },
    {
      name: 'Jane Hawkins',
      title: 'Creative Lead',
      avatar: 'img_avatar.png'
    },
  ])
  const [name, setName] = useState('Alan Smith')
  const [showCard, setShowCard] = useState(true)
  const toggleShowCard = () => setShowCard(!showCard)

  const cardsMarkup = showCard && <Card
    avatar='img_avatar.png'
    name={name}
    title='International Creative Administrator'
  />
  
  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>Toggle show/hide</button>
      {cardsMarkup}
    </div>
  );
}

export default App;
