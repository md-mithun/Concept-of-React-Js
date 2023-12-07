import { Component } from 'react';

export default class Emoji extends Component {
  addEmoji = (text, emoji) => {
    return `${emoji}${text}${emoji}`;
  };
  render(emojiTxt = 'Iam from parralel universe') {
    return <div>{emojiTxt}</div>;
  }
}
