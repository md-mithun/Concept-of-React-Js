/* eslint-disable react/prop-types */
import HOCCounter from './hocCounter';
function HoverCounter({ count, handleCounter }) {
  return (
    <div>
      <i onMouseOver={handleCounter}>Hovered {count} times</i>
    </div>
  );
}
export default HOCCounter(HoverCounter);
