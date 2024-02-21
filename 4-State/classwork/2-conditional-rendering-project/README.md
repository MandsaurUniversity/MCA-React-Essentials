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
 