import React from "react";
import "./Button.css";

// Creamos una interfaz para el objeto iconProps
interface IconProps {
  icon?: React.ReactNode; // Componente ícono (puede ser cualquier componente de ícono)
  iconPosition?: "left" | "right"; // Posición del ícono
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "normal" | "outline" | "cancel" | "disabled";
  iconProps?: IconProps; // Objeto con las propiedades icon e iconPosition
}

const Button: React.FC<ButtonProps> = ({
  variant = "normal",
  children,
  iconProps, // Desestructuramos el objeto iconProps
  ...props
}) => {
  return (
    <button
      className={`btn ${variant}`}
      disabled={variant === "disabled"}
      {...props}
    >
      {iconProps?.icon && iconProps?.iconPosition === "left" && (
        <span className="btn-icon">{iconProps.icon}</span>
      )}
      <span>{children}</span>
      {iconProps?.icon && iconProps?.iconPosition === "right" && (
        <span className="btn-icon">{iconProps.icon}</span>
      )}
    </button>
  );
};

export default Button;
