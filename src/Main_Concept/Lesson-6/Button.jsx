import { Component } from 'react';

// Button component that renders a button with the label "click"
export default class Button extends Component {
  // Checks if the component should update based on prop changes
  shouldComponentUpdate(nextProps) {
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

  render() {
    const { func, locale } = this.props;
    return (
      <button onClick={() => func(locale)}>
        {locale === 'bn-BD' ? 'Change clock' : 'ঘড়ি পরিবর্তন করুন'}
      </button>
    );
  }
}
