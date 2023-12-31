/* eslint-disable no-duplicate-case */
import { useReducer } from 'react';

const initialState = { counter: 0, counter2: 0 };
const reducer = (currentState, action) => {
  //   console.log(action);
  switch (action.type) {
    case 'inc':
      return { ...currentState, counter: currentState.counter + action.value };

    case 'dec':
      return { ...currentState, counter: currentState.counter - action.value };
    case 'inc2':
      return {
        ...currentState,
        counter2: currentState.counter2 + action.value,
      };

    case 'dec2':
      return {
        ...currentState,
        counter2: currentState.counter2 - action.value,
      };

    default:
      return currentState;
  }
};
const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>Count {count.counter}</div>
      <button onClick={() => dispatch({ type: 'inc', value: 3 })}>
        Increment by 3
      </button>
      <button onClick={() => dispatch({ type: 'dec', value: 5 })}>
        Decrement by 5
      </button>
      <hr />
      <div>Count {count.counter2}</div>
      <button onClick={() => dispatch({ type: 'inc2', value: 3 })}>
        Increment-2 by 3
      </button>
      <button onClick={() => dispatch({ type: 'dec2', value: 5 })}>
        Decrement-2 by 5
      </button>
    </>
  );
};

export default Reducer;
