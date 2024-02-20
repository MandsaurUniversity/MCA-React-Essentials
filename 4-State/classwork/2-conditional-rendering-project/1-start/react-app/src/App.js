import React, { useState } from 'react';
import './App.css';
import Card from './Card';
function App() {
  const [name, setName] = useState('Alan Smith')
  const buttonsMarkup = (
    <div>
      <button className="button button2">YES</button>
      <button className="button button3">NO</button>
    </div>
  )
  const changeNameHandler = (name) => {
    setName(name)
  }
  return (
    <div className="App">
      <button className="button" onClick={() => changeNameHandler('John Doe')}>Change Name</button>
      <Card
        avatar='img_avatar.png'
        name={name}
        title='International Creative Administrator'
        onChangeName={() => changeNameHandler('Michael Chan')}
      >{buttonsMarkup}
      </Card>



    </div>
  );
}

export default App;
