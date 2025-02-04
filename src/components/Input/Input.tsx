import React, { ForwardedRef } from "react";
import "./Input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode; // Propiedad para el ícono
}

const Input = React.forwardRef(
  (
    { label, className, error, icon, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className="input-container">
        {label && <label className="input-label">{label}</label>}
        <div className="input-wrapper">
          {icon && <span className="icon-left">{icon}</span>}
          <input
            ref={ref}
            className={`input-field ${className} ${error ? "input-error" : ""}`}
            style={{
              ...props.style,
              ...(icon ? { paddingLeft: "40px" } : {}), // Añade padding si hay ícono
            }}
            {...props}
          />
        </div>
        {error && <span className="error-message">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input"; // Asignar un nombre al componente para mejor depuración

export default Input;
