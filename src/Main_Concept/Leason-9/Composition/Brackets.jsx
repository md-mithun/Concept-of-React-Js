/* eslint-disable react/prop-types */
import { Component } from 'react';

export default class Brackets extends Component {
  addBrackets(txt) {
    return `[ ${txt} ]`;
  }
  render() {
    return this.props.children({ addBrackets: this.addBrackets });
  }
}
