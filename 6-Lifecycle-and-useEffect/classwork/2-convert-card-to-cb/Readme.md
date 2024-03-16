# MCA-React-Essentials

## Convert Card component to class base component

In this task, we are going to change `Card` component from **functional** base to **class** base.
- for this, first we are going to import the `Component`
- change the `function` keyword to `class` and **extend** it from `Component`
- create a **render(){}** function and move the **return()** function into this newly created render() function
- Now, since we do not have `props` instead, we can use `this.props` at all of the seven locations inside return() function

So we can see that everything works fine even after we change from functional to class based component.

## LifeCycle Methods Diagram

Go to this URL: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

Or consider this image below:

![LifeCycle Methods Diagram](image.png)

### React lifecycle hass three categories:
1. Mounting
2. Updating
3. Unmounting

**Mounting** is the "**birth**" of the component

**Updating** is the "**growth**" of the component

**Unmounting** is the "**death**" of the component

## React lifecycle - mounting

Now we are going to talk about **mounting**. First we are going to talk about constructor, but first let's add a `console.log('App.js constructor')` in the constructor.

### constructor() :

```js
constructor(props){
    console.log('App.js constructor')
    //...
}
```

As we've already seen that in your Component, you should not call the **setState()**. Instead, if your **component** needs to use `"local state"` aside the `"initial state"` to this state directly in this **constructor**, the **constructor** is the only place that you can assign this state directly.

In any other method (say: `deleteCardHandler()`, `changeNameHandler()`, etc) you should use the `'this.setState()'` since they do not do any side effect or subscriptions in the constructor. If you really need to do this, you have o use the **componentDidMount** instead.

### getDerivedStateFromProps() :

To understand `getDerivedStateFromProps` let's create a new method:

```js
// inside "App.js" file
static getDerivedStateFromProps(props, state) {
    console.log('Card js getDerivedStateFromProps', props)
    return state
}
```
In order to get something pop out here: 

`console.log('Card js getDerivedStateFromProps', props) // <= here!`,

go to the `index.js` file and create a **title** to the app (to get derived state from props) and this is the only purpose.
- This is _not_ a very common React lifecycle method.
- It enables the **component** to update its internal state as the result of changes in **props**.
- It is usually used in something like scroll direction based on the changing offset props.

```js
// in "index.js" file:
  <React.StrictMode>
    <App title="App Title" />
  </React.StrictMode>
```

### render() :

Let's go to the **render()** method and add this:

`console.log('App.js render')`

**React** require that you have to make the `render()` method "pure" _(**pure** functions are those which do not have side effects by making some HTTP request and always have the same output when the same inputs are passed)_

This means that you can not use `setState()` within this method.

### componentDidMount() :

Let's add this next method as well (above render() method, maybe?)

```js
componentDidMount() {
    console.log('App.js componentDidMount')
}
```

- The `componentDidMount` method is invoked immediately after a component is mounted.
- If you leave to load data from a remote endpoint, then this is a very good place to make some HTTP request.
- This method is good to set up any subscription but if you do that, don't forget to unsubscribe with the `componentDidUnmount` method that we will talk about later.

Now, we go to **Card.js** as we also want to see the Card rendering. So let's add a console.log() function to the render() method there:

`console.log("Card.js rendering")`

Now, in the **console**, you can see that the **App.js** _constructor_ runs first and then it will get a `getDerivedStateFromProps` and then the **App.js** starts to render and then, the `Card` also renders  times. And at the last, it called the componentDidMount method.

You can also observe something very weird, that all runs twice. This is because in the recent version, the rendering use `strict mode` when running in development. So strict method intentionally double calls the constructor and render method to better deal with unexpected side effects.

So, if we want to make a real one (render as it will do in production) we have to use a production build of React.

To do this, (we first need to beware that we also have a React Developer tools extension available for extensive debugging, which we'll talk later in detail) firstly check that the React Developer Tools is showing the icon as 'red' which signifies that this app is running in development build ad not a production build.

To create a production build, we have to run `npm run build` and now when you open the app in production build, you will find that the color of the icon in the extension will turn 'blue', showing that we are running production build of this React app. Now when you take a look at the console, you will be able to see that the console log messages are showing correct counts as they're intended to be.

So, we can see that it follow the order of the **constructor** which get derived from pops and from there, it go to the **render**. it renders 3 cards and then at last is the **componentDidMount**.

So this is a mounting life cycles of React.
