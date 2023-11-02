import { forwardRef } from "react";
import "../Styles/Button.sass"

export const Button = forwardRef(
  ({ children, variant = "primary", ...props }, ref) => {
    return (
      <button className={`btn btn-${variant}`} {...props}>
        {children}
      </button>
    );
  }
);