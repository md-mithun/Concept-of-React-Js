import { Component } from 'react';

class Class extends Component {
  state = {
    todo: '',
    warning: 'Good Choice!',
  };
  handleChange = (e) => {
    const value = e.target.value;
    const warningMsg = value.includes('.jsx')
      ? 'You need clear concept of JavaScript'
      : 'Good Choice!';
    this.setState({
      todo: value,
      warning: warningMsg,
    });
  };
  render() {
    const { todo, warning } = this.state;
    return (
      <div>
        <input type='text' value={todo} onChange={this.handleChange} />
        <p>{warning}</p>
      </div>
    );
  }
}
export default Class;
