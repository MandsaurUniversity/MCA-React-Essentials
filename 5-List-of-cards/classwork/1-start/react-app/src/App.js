import React, { useState } from 'react';
import './App.css';
import Card from './Card';
function App() {
  const [name, setName] = useState('Alan Smith')
  const [showCard, setShowCard] = useState(true)
  const changeNameHandler = name => setName(name)
  const changeInputHandler = event => setName(event.target.value)
  const toggleShowCard = () => setShowCard(!showCard)
  const buttonsMarkup = (
    <div>
      <button className="button button2">YES</button>
      <button className="button button3">NO</button>
    </div>
  )

  const cardsMarkup = showCard && <Card
    avatar='img_avatar.png'
    name={name}
    title='International Creative Administrator'
    onChangeName={() => changeNameHandler('Michael Chan')}
    onChangeInput={changeInputHandler}
  >{buttonsMarkup}
  </Card>
  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>Toggle show/hide</button>
      {cardsMarkup}
    </div>
  );
}

export default App;
