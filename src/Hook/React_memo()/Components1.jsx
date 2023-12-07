/* eslint-disable react-refresh/only-export-components */
import { memo } from 'react';
const Components1 = () => {
  console.log('Components1 rendered');
  return <div>Components1</div>;
};

export default memo(Components1);

/*
** Component: The component that you want to memoize. The memo does not modify this component, but returns a new, memoized component instead. Any valid React component, including functions and forwardRef components, is accepted.


**Parameters =>optional arePropsEqual: 
* A function that accepts two arguments: the component’s previous props, and its new props. 
* It should return true if the old and new props are equal: that is, if the component will render the same output and behave in the same way with the new props as with the old.
  Otherwise it should return false.Usually, you will not specify this function.
* By default, React will compare each prop with Object.is()
*/
