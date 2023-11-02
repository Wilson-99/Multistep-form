import { forwardRef } from "react";
import "../Styles/Input.sass"

export const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});