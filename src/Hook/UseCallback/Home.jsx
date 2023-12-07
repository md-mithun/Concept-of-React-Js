import { useCallback, useState } from 'react';
import Components1 from './Components1';

const Home = () => {
  console.log('Home rendered'); // Log a message when the Home component renders

  const [toggle, setToggle] = useState(true); // Track toggle state
  const [count, setCount] = useState(0); // Track count state

  const handleCount = useCallback(() => setCount(count + 1), [count]); // Memoized count update function
  const handleToggle = () => setToggle(!toggle); // Memoized toggle update function

  return (
    <div>
      {<p>{toggle ? 'On' : 'Off'}</p>}
      <button onClick={handleToggle}>Toggle</button>
      {/* Button to toggle state */}
      <Components1 count={count} handleCount={handleCount} />
      {/*Pass count and handleCount to Components1 */}
    </div>
  );
};

export default Home;

/*
To use useCallback, simply call it with the function you want to memoize and an optional array of dependencies. 
The dependencies array tells useCallback which values to watch for changes. 
If any of the values in the dependencies array change, useCallback will return a new function definition. 
Otherwise, it will return the same 'function definition' as it did on the previous render.
*/
