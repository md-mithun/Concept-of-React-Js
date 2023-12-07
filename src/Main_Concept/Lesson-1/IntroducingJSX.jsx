// import React from 'react'; // Import the React library

// // Create a React element using React.createElement()
// const example1 = React.createElement(
//   'h1', // Specify the type of HTML tag as 'h1'
//   { className: 'greeting' }, // Add a 'className' prop with the value 'greeting'
//   'Hello, world!' // Set the content of the 'h1' tag to 'Hello, world!'
// );
// // Create another React element using React.createElement()
// const example2 = React.createElement('h1', {
//   className: 'greeting', // Add a 'className' prop with the value 'greeting'
//   children: 'Hello, world!', // Set the content of the 'h1' tag using the 'children' prop
// });

// Define a constant variable named 'name' and assign the string 'Josh Perez' to it
const name = 'Muhammad Mithun';
// Export a constant variable named 'Element' that is a JSX expression rendering an 'h1' tag with the text "Hello, {name}"
export const Element = <h1>Hello, {name}</h1>;

//import this in App.jsx
// import { Element } from './Main_Concept/Lesson-1/IntroducingJSX';
