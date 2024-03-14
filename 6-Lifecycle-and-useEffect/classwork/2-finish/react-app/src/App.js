import React, { useState, Component } from 'react';
import './App.css';
import Card from './Card';
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
  
  deleteCardHandler = (cardIndex) => {
    const cards_copy = [...this.state.cards]
    cards_copy.splice(cardIndex, 1)
    this.setState({cards:cards_copy})
  }

  changeNameHandler = (event, id) => {
    //1. which card
    const cardIndex = this.state.cards.findIndex(card=>card.id == id)
    //2. make a copy of the cards
    const cards_copy = [...this.state.cards]
    //3. change the name of the specific card
    cards_copy[cardIndex].name = event.target.value
    //4. set the cards with the latest version of card copy
    this.setState({cards:cards_copy})
  }

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
}

export default App;
