import { useContext } from 'react';
import { counterContext } from './ComponentsA';

const ComponentsC = () => {
  const countContext = useContext(counterContext);
  console.log(countContext);
  return (
    <div>
      <hr />
      <p>Components C</p>
      <button onClick={() => countContext.countDispatch('inc')}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch('dec')}>
        Decrement
      </button>
      <hr />
    </div>
  );
};
export default ComponentsC;
