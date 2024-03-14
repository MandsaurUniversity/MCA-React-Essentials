# MCA-React-Essentials

We will now discuss the lifecycle and useEffect in React, but let's start with some practical changes first...

In this section, we are starting with converting the **functional base** to **class base**

First, we are going to import the `Component` from `react`

```js
import React, { useState, Component } from 'react';
```

Now we will change the functional `App` component to a `class` component:

```js
class App extends Component {
    // ...
}
``

Now we will remove the useState because now our `App` is no longer a functional component

```js
import React, { Component } from 'react';
```

Instead of `useState`, now we will use the class constructor

```js
class App extends Component {
    constructor(props){
        super(props)
    }
    // ...
}
```

Now, we put all the `states` (cards, showCard, etc) inside `this.state`:

```js

  /*
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
  const [showCard, setShowCard] = useState(true)
  const toggleShowCard = () => setShowCard(!showCard)
  */

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            cards: [
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
            ],
            showCard: true
        }
    }
    toggleShowCard = () => this.setState({showCard:!this.state.showCard})
    // ...
}
```

Also, we cannot use `cards` anymore. instead, `this.state.cards` will be used

```js
/*
const deleteCardHandler = (cardIndex) => {
    const cards_copy = [...cards]
    cards_copy.splice(cardIndex, 1)
    setCards(cards_copy)
}
*/
deleteCardHandler = (cardIndex) => {
    const cards_copy = [...this.state.cards]
    cards_copy.splice(cardIndex, 1)
    this.setState({cards:cards_copy})
}
/*

  const changeNameHandler = (event, id) => {
    //1. which card
    const cardIndex = cards.findIndex(card=>card.id == id)
    //2. make a copy of the cards
    const cards_copy = [...cards]
    //3. change the name of the specific card
    cards_copy[cardIndex].name = event.target.value
    //4. set the cards with the latest version of card copy
    setCards(cards_copy)
  }
*/

  const changeNameHandler = (event, id) => {
    //1. which card
    const cardIndex = cards.findIndex(card=>card.id == id)
    //2. make a copy of the cards
    const cards_copy = [...cards]
    //3. change the name of the specific card
    cards_copy[cardIndex].name = event.target.value
    //4. set the cards with the latest version of card copy
    setCards(cards_copy)
  }
```

Also, now the `cardsMarkup` and `return` statements should also be inside a render function:

```js
/*
  const cardsMarkup = showCard && (
  cards.map( (card, index) => <Card
    avatar='img_avatar.png'
    name={card.name}
    title= {card.title}
    key = {card.id}
    onDelete={ () => deleteCardHandler(index) }
    onChangeName={(event)=>changeNameHandler(event, card.id)}
  />)
  )
  
  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>Toggle show/hide</button>
      {cardsMarkup}
    </div>
  );
  */
 
  render(){
    const cardsMarkup = this.state.showCard && (
      this.state.cards.map( (card, index) => <Card
        avatar='img_avatar.png'
        name={card.name}
        title= {card.title}
        key = {card.id}
        onDelete={ () => this.deleteCardHandler(index) }
        onChangeName={(event)=>this.changeNameHandler(event, card.id)}
      />)
      )
    return (
      <div className="App">
        <button className="button" onClick={this.toggleShowCard}>Toggle show/hide</button>
        {cardsMarkup}
      </div>
    );
  }
```
