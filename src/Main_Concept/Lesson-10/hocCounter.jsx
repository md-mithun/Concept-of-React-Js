import { Component } from 'react';

const hocCounter = (OldCounter) => {
  class newCounter extends Component {
    state = { count: 0 };
    handleCounter = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };
    render() {
      const { count } = this.state;
      return <OldCounter count={count} handleCounter={this.handleCounter} />;
    }
  }

  return newCounter;
};

export default hocCounter;
