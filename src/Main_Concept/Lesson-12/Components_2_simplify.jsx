import { Component } from 'react';
import HoverCounter from './HoverCounter';
import RenderCounter from './RenderCounter';
import ColorContext from './Context/ColorContext';

export default class Components_2_Class extends Component {
  render() {
    const { color, setColor } = this.context;
    return (
      <>
        <h1>Components-3</h1>
        <RenderCounter>
          {(count, handleCounter) => (
            <HoverCounter
              color={color}
              setColor={setColor}
              count={count}
              handleCounter={handleCounter}
            />
          )}
        </RenderCounter>
      </>
    );
  }
}

Components_2_Class.contextType = ColorContext;
