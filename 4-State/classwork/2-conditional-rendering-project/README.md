# MCA-React-Essentials

We  will work on the **Conditional Rendering** project now but first, we'll understand the underlying concept to be used in this project.

## Two way binding

Two-way binding means data flows **automatically** in both directions:

* **Changes in the UI (view)** are **reflected in the underlying data (model)**.
* **Changes in the data (model)** are **automatically reflected in the UI (view)**.

It simplifies data management but can lead to unintended consequences if not used carefully.

In this practical lab, we will create an input field below the Name in the **Card** component and fetch the value of name in it. Whenever we change the input field value, the name will change accordingly.

### Things to do:

* Create a input field in the `Card` component under the title. (`<input type="text" value={props.name} />`)

* In order to change the Name, we will create a new function under `changeNameHandler` and name it `changeInputHandler`

```javascript
const changeInputHandler = event => setName(event.target.value)
```

* Under the `<Card>` tag inside `App` component, we'll also need to add onChangeInput custom event like this:

```javascript
onChangeInput={changeInputHandler}
```

* Now we can pass this function to our `Card` component by using `props.onChangeInput`

```javascript
<input type="text" value={props.name} onChange={props.onChangeInput} />
```

_Hint: you can also change the `changeNameHandler` functin to a one liner function._

## Conditional rendering

Now we are going to create a button such that it can be a toggle show/hide and we are going to change the function of this button.
- Go to the `App.js` file and change this line of code:
    ```js
    <button className="button" onClick={() => changeNameHandler('John Doe')}>Change Name</button>
    ```
    to this:
    ```js
    <button className="button" onClick={() => changeNameHandler('John Doe')}>Toggle show/hide</button>
    ```
- Create a new state `showCard` and also `setShowCard` like this: `const [showCard, setShowCard] = useState(true)`. We are setting the initial state to be true so that when the page loads, it shows the card by default.
- Now, we have to create a new function `toggleShowCard` and inverse the value of `showCard` like this:
    ```javascript
    const toggleShowCard = () => setShowCard(!showCard)
    ```
- Bind this `toggleShowCard` function to the button ( `<button onClick={toggleShowCard}>Toggle show/hide</button>` )

To create a conditional rendering we already can imagine what we are going to do is to show the card if the `showCard` is true. Otherwise you will hide the card. So there is if...else questions and here we need ternary operator like `c = (a < b) ? a : b`

- So, right below the Toggle show/hide, create this JavaScript condition:
    ```
    { showCard ? <Card avatar...> ... </Card> : null }
    ```
_Hint: you can also put the code in a buttonsMarkup as shown in the final project folder_