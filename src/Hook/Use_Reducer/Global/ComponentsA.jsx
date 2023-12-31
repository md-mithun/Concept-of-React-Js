/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react';
import { useReducer } from 'react';
import ComponentsB from './ComponentsB';

const initialstate = 0;
function reducer(currentState, action) {
  switch (action) {
    case 'inc':
      return currentState + 1;
    case 'dec':
      return currentState - 1;

    default:
      return currentState;
  }
}
export const counterContext = createContext();
const ComponentsA = () => {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <div>Components A</div>
      <h1>Count {count}</h1>
      <counterContext.Provider value={{ countDispatch: dispatch }}>
        <ComponentsB />
      </counterContext.Provider>
    </div>
  );
};

export default ComponentsA;
