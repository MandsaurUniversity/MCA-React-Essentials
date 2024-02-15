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