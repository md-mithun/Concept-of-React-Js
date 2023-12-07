function ClickCounter({ count, handleCounter }) {
  return (
    <div>
      <button onClick={handleCounter}>Clicked {count} times</button>
    </div>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export default ClickCounter;
