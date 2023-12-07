/* eslint-disable react/prop-types */
import { Component } from 'react';

export default class Asterisk extends Component {
  addasterisk(txt) {
    return `** ${txt} **`;
  }
  render() {
    return this.props.children({ addasterisk: this.addasterisk });
  }
}
