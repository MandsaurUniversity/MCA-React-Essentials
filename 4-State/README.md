# MCA-React-Essentials

## State

In this part we are going to talk about `state` and we will also talk about change of `state`

### `useState` and Change of State

Let's start at the top of the app by creating a button which we are going to use to change the name of the card.

#### Steps:
1. Add the code for button and place it above the <Card></Card> tag inside App component
```javascript
<button className="button">Change Name</button>
```
2. import the `useState` module from react: `import React, {useState} from 'react'`
3. Create a new variable `name` and set its name as `Virat Kohli` like this: `const [name, setName] = useState('Virat Kohli')`
4. In order to change the state, we have to create a function to change the name. Let's create a function to change the name and also add an `onClick` handler to the button.

```javascript
  const changeNameHandler = () => {
    setName("Rohit Sharma")
  }

  //...

  <button className="button" onClick={changeNameHandler}>Change Name</button>
```

### Passing function to component

How about if we also have a button inside **Card** that can also change the name by passing a function to the component! We can do this by adding onChangeName to the `<Card>` like this:

```javascript
const changeNameHandler = (name) => {
    setName(name)
}
<Card
        avatar='img_avatar.png'
        name={name}
        title='International Creative Administrator'
        onChangeName={() => changeNameHandler('Sunil Shetty')}
      >
```

