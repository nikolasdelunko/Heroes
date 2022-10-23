import "./Style.css";
import React from "react";

const Button = (props) => {
  const { classN, text, disabled, onClick, type } = props;
  return (
    <div className="btn-container">
      <button
        data-testid="button-element"
        className={classN}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
