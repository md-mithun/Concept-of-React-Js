import { Component } from 'react';
import Button from './Button';

// Define a React component named 'StateLifeCycle'
class StateLifeCycle extends Component {
  // Initialize the component's state with the current date
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: 'bn-BD' };
    // this.handleClick = this.handleClick.bind(this);//or use onClick={this.handleClick.bind(this)} or use arrow function
  }
  handleClick = (locale) => {
    this.setState({ locale: locale });
  };

  // When the component is mounted, set an interval to call the 'updateTime' function every second
  componentDidMount() {
    this.setTime = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  // When the component is unmounted, clear the interval to prevent memory leaks
  componentWillUnmount() {
    clearInterval(this.setTime);
  }

  // Update the component's state with the current date
  updateTime() {
    this.setState({ date: new Date() });
  }

  render() {
    const { date, locale } = this.state;
    //condiotional rendering
    // let button;
    // if (locale === 'bn-BD') {
    //   button = <Button func={this.handleClick} locale={'en-US'} />;
    // } else {
    //   button = <Button func={this.handleClick} locale={'bn-BD'} />;
    // }

    return (
      <div>
        <h3>Hello, world!</h3>
        <h1>{date.toLocaleTimeString(locale)}</h1>
        {/* condiotional rendering */}
        {locale === 'bn-BD' ? (
          <Button func={this.handleClick} locale={'en-US'} />
        ) : (
          <Button func={this.handleClick} locale={'bn-BD'} />
        )}
      </div>
    );
  }
}

export default StateLifeCycle;
