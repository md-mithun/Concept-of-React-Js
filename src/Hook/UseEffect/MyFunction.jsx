import { useEffect, useState } from 'react';
const MyFunction = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());
  function tick() {
    setTime(new Date());
    console.log('tick running');
  }
  useEffect(() => {
    let interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  function setTitle() {
    setCount((prevCount) => prevCount + 1);
  }
  useEffect(() => {
    document.title = 'Clicked ' + count + ' times';
  }, [count]);
  return (
    <div>
      {/* {console.log('app render')} */}
      <h1>{time.toLocaleTimeString()}</h1>
      <p>JavaScript is Fun</p>
      <button onClick={setTitle}>set </button>
    </div>
  );
};

export default MyFunction;

{
  /*
const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <MyFunction />}
      <button onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>
    </div>
  );
};
*/
}
