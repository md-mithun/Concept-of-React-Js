/* eslint-disable react-refresh/only-export-components */
import { forwardRef } from 'react';

const Input = ({ type, placeholder }, ref) => {
  return <input ref={ref} type={type} placeholder={placeholder} />;
};
const forwardedInput = forwardRef(Input);
export default forwardedInput;
