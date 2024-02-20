# MCA-React-Essentials

## State and `useState`

**Practice time:**

Let's start at the top of the app by creating a button which we are going to use to change the name of the card.

### Steps:
1. Add the code for button and place it above the <Card></Card> tag inside App component
```javascript
<button className="button">Change Name</button>
```
2. import the `useState` module from react: `import React, {useState} from 'react'`
3. Create a new variable `name` and set its name as `Virat Kohli` like this: `const [name, setName] = useState('Virat Kohli')`
   1. Inside the `Card` tag in the **App** component, replace the static prop name with: `name={name}`
4. In order to change the state, we have to create a function to change the name. Let's create a function to change the name and also add an `onClick` handler to the button.

```javascript
  const changeNameHandler = () => {
    setName("Rohit Sharma")
  }

  //... inside return() add this above `Card` tag

  <button className="button" onClick={changeNameHandler}>Change Name</button>
```

### Passing function to component

How about if we also have a button inside **Card** that can also change the name by passing a function to the component! We can do this by adding onChangeName to the `<Card>` like this:

```javascript
const changeNameHandler = (name) => {
    setName(name)
}
```
and
```javascript
<Card
        avatar='img_avatar.png'
        name={name}
        title='International Creative Administrator'
        onChangeName={() => changeNameHandler('Sunil Shetty')}
      >
```

You will find that there is nthing happened on the screen, but when you take a look at the object inside console, you will see that there is a `onChangeName` functin under the Object and there will be a warning which says: _<div> cannot appear as a descendant of <p>_

So, in order to fix this, go to the `Card` component and change:
```javascript
// change:
<p>{props.children}</p>
// to this:

<div>{props.children}</div>
```

Now add a new button in the `Card` component to change the name:
```javascript
<p><button className="button">Change Name</button></p>
```
Add an `onClick` to this button like this: `onClick={props.onChangeName}`

