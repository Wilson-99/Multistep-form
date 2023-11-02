import "../Styles/Form.sass"
export const Form = ({ children, ...props }) => {
    return (
      <form className="form-container" {...props} noValidate>
        {children}
      </form>
    );
  };