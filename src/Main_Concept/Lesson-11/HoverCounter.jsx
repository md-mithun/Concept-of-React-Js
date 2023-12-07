function HoverCounter({ count, handleCounter }) {
  return (
    <div>
      <i onMouseOver={handleCounter}>Hovered {count} times</i>
    </div>
  );
}
export default HoverCounter;
