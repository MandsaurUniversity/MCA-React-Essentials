# MCA-React-Essentials

## Convert Card component to class base component

In this task, we are going to change `Card` component from **functional** base to **class** base.
- for this, first we are going to import the `Component`
- change the `function` keyword to `class` and **extend** it from `Component`
- create a **render(){}** function and move the **return()** function into this newly created render() function
- Now, since we do not have `props` instead, we can use `this.state.props` at all of the seven locations inside return() function

So we can see that everything works fine even after we change from functional to class based component.

## LifeCycle Methods Diagram

Go to this URL: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
Or consider this image below:
![LifeCycle Methods Diagram](image.png)