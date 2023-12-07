import { Component } from 'react';
import ClickCounter from './ClickCounter';
import Components_1 from './Components_1';
import RenderCounter from './RenderCounter';
import ColorContext from './Context/ColorContext';

export default class Home extends Component {
  state = {
    color: 'green',
    setColor: () => {
      this.setState(({ color }) => {
        if (color === 'green') {
          return { color: 'red' };
        }
        return { color: 'green' };
      });
    },
  };
  render() {
    const color = this.state;
    const { setColor } = this.state;

    return (
      <ColorContext.Provider value={{ color, setColor }}>
        <RenderCounter>
          {(count, handleCounter) => (
            <ClickCounter count={count} handleCounter={handleCounter} />
          )}
        </RenderCounter>
        <Components_1 />
      </ColorContext.Provider>
    );
  }
}
