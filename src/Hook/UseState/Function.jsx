import { useState } from 'react';

function Function() {
  const [todo, setTodo] = useState('');
  const [warning, setWarning] = useState('Good Choice!');
  const handleChange = (e) => {
    const value = e.target.value;
    const warningMsg = value.includes('.jsx')
      ? 'You need clear concept of JavaScript'
      : 'Good Choice!';
    setTodo(value);
    setWarning(warningMsg);
  };
  return (
    <div>
      <input type='text' value={todo} onChange={handleChange} />
      <p>{warning}</p>
    </div>
  );
}
export default Function;
