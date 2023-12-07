import { useContext } from 'react';

import HoverCounter from './HoverCounter';
import RenderCounter from './RenderCounter';
import ColorContext from './Context/ColorContext';

const Components_2_useContextHook = () => {
  const contex = useContext(ColorContext);
  const { color, setColor } = contex;
  return (
    <>
      <h1>Components-2</h1>
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
};

export default Components_2_useContextHook;
