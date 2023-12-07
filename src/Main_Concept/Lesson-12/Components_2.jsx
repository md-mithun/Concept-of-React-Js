import HoverCounter from './HoverCounter';
import RenderCounter from './RenderCounter';
import ColorContext from './Context/ColorContext';
const Components_2 = () => {
  return (
    <ColorContext.Consumer>
      {({ color, setColor }) => (
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
      )}
    </ColorContext.Consumer>
  );
};

export default Components_2;
