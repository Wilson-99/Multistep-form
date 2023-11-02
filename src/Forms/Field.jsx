import React from "react";
import "../Styles/Field.sass"

export const Field = ({ children, label, error }) => {
  const id = getChildId(children);

  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
      </label>
      {children}
      {error && <small className="error">{error.message}</small>}
    </div>
  );
};

// Get id prop from a child element
export const getChildId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child.props.id;
  }
};