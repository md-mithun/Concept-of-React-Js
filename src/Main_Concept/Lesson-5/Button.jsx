import { Component } from 'react';

// Button component that renders a button with the label "click"
export default class Button extends Component {
  // Checks if the component should update based on prop changes
  shouldComponentUpdate(nextProps) {
    //syntax: shouldComponentUpdate(nextProps, nextState)

    // Extract current and next props for comparison
    const { func: currentFunc, locale: currentLocale } = this.props;
    const { func: nextFunc, locale: nextLocale } = nextProps;

    // Compare current and next props to determine if an update is necessary
    return currentFunc === nextFunc && currentLocale === nextLocale
      ? // If props are equal, prevent unnecessary re-rendering
        false
      : // If props are different, trigger re-rendering
        true;
  }

  // Component rendering lifecycle method
  render() {
    // Log a message to indicate the component is rendering
    console.log('Button component render');

    // Extract props for use in the component
    const { func, locale } = this.props;

    // Return a button element with the label "click" and the click handler
    return <button onClick={() => func(locale)}>click</button>;
  }
}
