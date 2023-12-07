/* eslint-disable react/prop-types */
import { Component } from 'react';

export default class RenderCounter extends Component {
  state = { count: 0 };

  handleCounter = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    //use this
    //const { render } = this.props;
    //const { count } = this.state;
    //return render(count, this.handleCounter);

    //or
    const { children } = this.props;
    const { count } = this.state;
    return children(count, this.handleCounter);
  }
}
