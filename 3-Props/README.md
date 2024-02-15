# MCA-React-Essentials

## Props

### Pass and receive `props`

Let's learn how to pass different names to the component instead of the default "John Doe"

#### Steps:
1. First, go the the css file and change the margin of `.card` to  `margin: 0 auto 10px`
2. We're going to pass the name from `App.js` to the `Card.js` component.
3. For this, we'll create a property `name` on `<Card />` component like this: `<Card name='Rahul Dhangar' />`
4. Now, we have to pass the props to the Card component like this:
   1. `const Card = (props) => { ... }` or `const Card = props => { ... }`
   2. Note: to see if it works, you can log the `props` in console using: `console.log(props)`
5. In the `Card` component, set the name dynamically by replacing `<b>John Doe</b>` with `<b>{props.name}</b>`

### Pass multiple `props`

Now, let's pass multiple `props` to the Card component! 

#### Steps:
1. Add another prop in the <Card /> component inside `App.js` : `jobTitle='Fullstack Developer'`
2. Likewise, do the same for the remaining two components.
3. In the `Card` component, change the job title dynamically by replacing `<p>Architect & Engineer</p> ` with `<p>{props.jobTitle}</p>`

### The children of `props`

pops.children is available on every component. It contains the content between the opening and closing parts of a component.

#### Example:
`
<Card>Hello World!</Card>
`

#### Steps:
1. Inside card component, we can create a new paragraph and inside it, let's pass `props.children`
   - In `App.js` file, change the self-closing `<Card />` to: `<Card></Card>` 
   - So now, the changed line would look something like this:
   ```js
   <Card name='Rahul Dhangar' jobTitle='Fullstack Developer' >
      Hello World!
   </Card>
   ```

### The children of `props` (continued...)

Now, let's replace this "Hello World" with something useful!

Let's create two buttons inside our Card. For this, you can go to the w3schools.com to copy the buttons code and associated styles as mentioned in the steps below.

#### Steps:
1. Go to https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_color and copy the code for creating button
```html
<button class="button button2">Blue</button>
<button class="button button3">Red</button>
```
2. Copy the css from the w3schools page and paste it in our App.css file
```css
.button {
   background-color: #04AA6D; /* Green */
   border: none;
   color: white;
   padding: 15px 32px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   font-size: 16px;
   margin: 4px 2px;
   cursor: pointer;
}

.button2 {background-color: #008CBA;} /* Blue */
.button3 {background-color: #f44336;} /* Red */ 
```
3. Change the `class` keyword in the html to `className` and change the names of buttons to **YES** and **NO**
4. We can also extract these two buttons into a variable so we cut the `<button>` html and create a new variable like this:

```javascript
const buttonsMarkup = (
   <div>
   <button className="button button2">YES</button>
   <button className="button button3">NO</button>
   </div>
)
```
5. Add this `buttonsMarkup` variable inside the Card.