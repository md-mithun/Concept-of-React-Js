// Import necessary React hooks
import { useMemo, useState } from 'react';

import Components1 from './Components1';
const Home = () => {
  const [count1, setCount1] = useState(0);
  const [count, setCount] = useState(0);

  // Memoize the expensiveCalculation function using useMemo hook
  const expensiveCalculation = useMemo(() => {
    let i = 0;
    // Perform an expensive calculation
    while (i < 1000000000) {
      i++;
    }
    // Return true if count1 is even, false otherwise
    return count1 % 2 === 0;
  }, [count1]); // Dependency array indicates that the function should only be recalculated when count1 changes

  const handleCount1 = (x) => {
    setCount1((count) => count + x);
  };

  const handleCount = (x) => {
    setCount((count) => count + x);
  };

  // Log a message when the Home component renders
  console.log('Home rendered');

  return (
    <div>
      <h1>Counted {count1} times</h1>
      <p>{expensiveCalculation() ? 'Even' : 'Odd'}</p>
      <button onClick={() => handleCount1(1)}>Increment count 1</button>
      <hr />
      <Components1 count={count} handleCount={handleCount} />
    </div>
  );
};

export default Home;
/*
The useMemo() hook is used to memoize the expensiveCalculation() function, which performs a complex calculation. However, since the function depends on count1, it will be recalculated whenever count1 changes. , the expensiveCalculation() function being memoized in the Home component will not cause the Components1 component to re-render unnecessarily
*/

/*
 * useMemo takes two arguments: a function and an optional array of dependencies.
 * The function is the value you want to memoize, and the dependencies array tells useMemo which values to watch for changes.
 * If any of the values in the dependencies array change, useMemo will return a new value.
 * Otherwise, it will return the same value as it did on the previous render
 */
