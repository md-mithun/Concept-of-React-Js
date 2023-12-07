function HoverCounter({ count, handleCounter, color, setColor }) {
  return (
    <div style={color}>
      <h1 style={{ cursor: 'pointer' }} onMouseOver={handleCounter}>
        Hovered {count} times
      </h1>
      <button onClick={setColor}>Switch Color</button>
    </div>
  );
}
export default HoverCounter;
