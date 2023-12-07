import { useRef, useEffect } from 'react';
import Input from './Input';
import Time from './Time';
const Home = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <Input ref={inputRef} type='text' placeholder='Enter text' />
      <Time />
      <h1>hello</h1>
    </div>
  );
};

export default Home;
