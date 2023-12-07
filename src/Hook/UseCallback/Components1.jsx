/* eslint-disable react-refresh/only-export-components */
import { memo } from 'react';

const Components1 = ({ count, handleCount }) => {
  console.log('Components 1 rendered'); // Log a message when the Components1 component renders
  return (
    <div>
      <h1>counted {count} times</h1>
      <button onClick={() => handleCount()}>Increment count</button>
    </div>
  );
};

export default memo(Components1, (prevProps, nextProps) => {
  // Compare the count prop of the previous and next props
  // Return true if the count prop has not changed, যা ইঙ্গিত করে যে  re-rendering প্রয়োজন নেই
  // Return false if the count prop has changed, indicating the need for re-rendering
  return prevProps.count === nextProps.count;
});
