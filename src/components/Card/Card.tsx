import React from "react";
import "./Card.css";
import Button from "../Button/Button";

// Definimos los tipos para las propiedades de cada botón
interface ButtonProps {
  type?: "button" | "submit" | "reset"; // Tipo del botón
  onClick?: () => void; // Evento del botón
  text?: string; // Texto del botón
  variant?: "normal" | "outline" | "cancel" | "disabled"; // Estilo del botón
  visible?: boolean; // Controla la visibilidad del botón
}

interface CardProps {
  title: string;
  subtitle: string;
  content: React.ReactNode; // Acepta cualquier tipo de JSX
  primaryProps?: ButtonProps; // Objeto con las propiedades para el botón primario
  secondaryProps?: ButtonProps; // Objeto con las propiedades para el botón secundario
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  content,
  primaryProps = {}, // Valor por defecto para el objeto primaryProps
  secondaryProps = {}, // Valor por defecto para el objeto secondaryProps
}) => {
  // Desestructuramos las propiedades de cada botón
  const {
    type: primaryType = "button", // Valor por defecto para el tipo del primer botón
    onClick: onPrimary,
    text: primaryText = "Aceptar", // Valor por defecto para el texto del primer botón
    variant: primaryVariant = "normal", // Valor por defecto para el estilo del primer botón
    visible: primaryVisible = true, // Valor por defecto: visible
  } = primaryProps;

  const {
    type: secondaryType = "button", // Valor por defecto para el tipo del segundo botón
    onClick: onSecondary,
    text: secondaryText = "Cancelar", // Valor por defecto para el texto del segundo botón
    variant: secondaryVariant = "cancel", // Valor por defecto para el estilo del segundo botón
    visible: secondaryVisible = true, // Valor por defecto: visible
  } = secondaryProps;

  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
      </div>
      <div className="card-body">{content}</div>
      <div className="card-footer">
        {/* Verificamos la visibilidad de los botones */}
        {secondaryVisible && (
          <Button
            variant={secondaryVariant}
            onClick={onSecondary}
            type={secondaryType}
          >
            {secondaryText}
          </Button>
        )}
        {primaryVisible && (
          <Button
            variant={primaryVariant}
            onClick={onPrimary}
            type={primaryType}
          >
            {primaryText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
