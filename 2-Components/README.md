# MCA-React-Essentials

## Components

### Creating a list of card

Let's learn react components by creating a list of cards.

#### Steps:
1. Create an empty react app using command `npm create-react-app` or use the app provided inside `1-start` folder as the starting point.
1. Copy the image file from `0-resources` folder to the `public/` folder of **react-app**
1. Add the html code (given in `0-resources` folder) to the `App()` component and adjust it as per **JSX** rules (class -> className | stye="" -> style={{ }} etc)
1. Copy the CSS from the code given in `0-resources` and paste it in the App.css file.
1. Adjust the size of **card** from 40% to 20% in CSS.
1. Copy & paste the **card** html two more times to create three different cards.
1. Give some margin to the **cards** (add `margin-top: 20px` to the .card css property)

### Creating card component

As you can see, the JSX code looks dirty after pasting the same (redundant) code three times. So now, let's create a component named `Card` and add this redundant code to this component and make the JSX look good!

#### Steps:
1. Create a new file `Card.js`
1. Add boilerplate react code using `rafce` shortcut
1. Cut the redundant code from `App.js` file and paste it into the `Card.js` file
1. import `App.css` file.
2. Go to `App.js` file and delete the redundant code for Card and import the Card component from Card.js
3. Add the Card component to the App using <Card /> and duplicate it 3 times to get the same look as before.

## Note:
- The function name inside a component should always start with a capital letter else it will not be recognized as a component to React compiler.