# MCA-React-Essentials

In this hands-on lab, we will render a pre-made list of cards and implement **delete** functionality on cards.

But before starting it, let's remove some unnecessary things like the unused buttons **YES** and **NO** inside the cards. We will also deete the input field **name** and other unnecessary stuffs from now. All the code is already removed from the react app starter inside `1-start` folder.

Now, in order to create three cards, we are not going to paste the cards three times, but instead we are going to create objects that holds the value of props been provided to those cards.

## Rendering a list of cards

So now instead of copy and paste the cards three times, we are going to look for the objects.

We are going to use the **cards** created in our boilerplate app: `const [cards, setCards] = useState([ ... ])`

Since we are not going to show one, but three cards. So in the `cardsMarkup` we need to add a bracket (as shown below) and then use a `Map` function to loop through the cards object like this:
```js
const cardsMarkup = showCard && (
  cards.map( card => <Card
    avatar='img_avatar.png'
    name={name}
    title='International Creative Administrator'
  />)
)
```

Now, since we are going to use the **name** given in the cards' data object, we can remove this line: `const [name, setName] = useState('Alan Smith')` and then bind the cards with the **name** given in that data object like this: `name={card.name}` and likewise, bind the **title** field as well.

But when you open console, you will find an error: `Warning: Each child in a list should have a unique "key" prop.` So let's fix this error a little later.

## Delete a specific card

In this section, we want to click the red button such that the specific card is deleted.

So we will create a new function inside `App.js` file right above the cardsMarkup and name it `deleteCardHandler`. So now, the code would look like this:
```js
  const deleteCardHandler = () => {
  }

  const cardsMarkup = showCard && (
  cards.map( (card, index) => <Card
    avatar='img_avatar.png'
    name={card.name}
    title= {card.title}
    onDelete={ () => deleteCardHandler(index) }
  />)
  )
```

And in the `Card.js` file, we need to bind the **onClick** with **onDelete** method like this:
```js
<p><button className="button button-red" onClick={props.onDelete}>Delete</button></p>
```

Now, back to the `App.js` file, go to the **deleteCardHandler** and we will pass the card index and we will make a copy of the card like this:
```js
  const deleteCardHandler = (cardIndex) => {
    const cards_copy = cards    //[...cards]
    cards_copy.splice(cardIndex, 1)
    //console.log('cards_copy',cards_copy)
    //console.log('cards',cards)
    setCards(cards_copy)
  }
```

## Fix unique key error

We still have the error that **Each child in a list should have a unique "key" prop.**

In order to rectify this error, we need to add a key to the list of props in **cardsMarkup** like this: `key = {card.key}`

We can not simply use the index of card in place of unique key because when we delete a card, indices of the remaining cards gets changed which may cause unwanted errors. So, the index should only be used as unique key in some exceptional cases where the list of cards will always remain static and you never need to do manipulations in the list of cards or its order.

So, let's add a random `id` in our cards data object. Now, pass the key in the map function like this: `key = {card/id}`


## Change the name of a specific card

Now in this part we are going to add the input field on each card such that when you type the name in the **input** field, **Name** on the card will be changed.

Go to the `Card` component and under the title, add input field and bind the value to `props.name`. Add **onChanged** as well, which will be bind to a function later.

```js
<input type="text" value={props.name} onChanged={ () => {} } />
```

Go back to the `App` component and create a new function named: `changeNameHandler`. Since we will get the name from the `<input />` box so we need an event and id from the card, hence we'll have two params passed to this function:
```js
const changeNameHandler = (event, id) => {
  //1. which card
  cardIndex = cards.findIndex(card=>card.id === id)
  //2. make a copy of the cards
  cards_copy = [...cards]
  //3. change the name of the specific card
  cards_copy[cardIndex].name = event.target.value
  //4. set the cards with the latest version of card copy
  setCards(cards_copy)
}
```

Now, in the `cardsMarkup` add an event listener **`onChangeName`** and in the **Card** component, bind this event listener.

```js
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
```

```js
<input type="text" value={props.name} onChange={ props.onChangeName } />
```