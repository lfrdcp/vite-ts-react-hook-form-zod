import React from "react";
import "./Select.css";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  icon?: React.ReactNode; // El ícono en sí (puede ser un componente de ícono)
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, className, error, options, icon, ...props }, ref) => {
    return (
      <div className="input-container">
        {label && (
          <label htmlFor={props.name} className="input-label">
            {label}
          </label>
        )}
        <div className="input-wrapper">
          {icon && <span className="icon-left">{icon}</span>}
          <select
            className={`input-field ${className} ${error ? "input-error" : ""}`}
            style={{
              ...props.style,
              ...(icon ? { paddingLeft: "40px" } : {}),
            }}
            {...props}
            ref={ref}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {error && <span className="error-message">{error}</span>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
