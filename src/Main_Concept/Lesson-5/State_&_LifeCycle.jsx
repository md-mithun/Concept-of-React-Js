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
    console.log('hello click');
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
    console.log('Clock component render');
    const { date, locale } = this.state;
    return (
      <div>
        <h3>Hello, world!</h3>
        <h1>{date.toLocaleTimeString(locale)}.</h1>
        <Button func={this.handleClick} locale={'en-US'} />
      </div>
    );
  }
}

export default StateLifeCycle;
