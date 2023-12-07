import Emoji from './Emoji';

export default class Inheritance extends Emoji {
  render() {
    let decoratedText = this.addEmoji('Mithun', ' 🎓 ');
    return super.render(decoratedText);
  }
}
