import { useState } from 'react';
import Components1 from './Components1';
const Home = () => {
  const [count, setCount] = useState(0);
  console.log('Home rendered');
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Add 1</button>
      <Components1 />
    </div>
  );
};

export default Home;
