import { useEffect, useRef, useState } from 'react';

const Time = () => {
  const [date, setDate] = useState(new Date());
  const buttonRef = useRef();
  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    buttonRef.current = setInterval(tick, 1000);
    return () => {
      clearInterval(buttonRef.current);
    };
  }, []);
  return (
    <div>
      <h1>{date.toLocaleTimeString()}</h1>
      <button onClick={() => clearInterval(buttonRef.current)}>c</button>
    </div>
  );
};

export default Time;
