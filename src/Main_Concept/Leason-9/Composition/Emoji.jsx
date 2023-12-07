/* eslint-disable react/prop-types */
import { Component } from 'react';

export default class Emoji extends Component {
  addEmoji(txt, emoji) {
    return `${emoji} ${txt} ${emoji}`;
  }
  render() {
    return this.props.children({ addEmoji: this.addEmoji });
  }
}
