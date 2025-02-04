import React from "react";
import "./AlertDialog.css";
import Button from "../Button/Button";
import { XMarkIcon } from "@heroicons/react/24/solid"; // Asegúrate de tener el ícono importado

// Definimos los tipos para las propiedades de los botones
interface ButtonProps {
  type?: "button" | "submit" | "reset"; // Tipo del botón
  onClick?: () => void; // Evento del botón
  text?: string; // Texto del botón
  variant?: "normal" | "outline" | "cancel" | "disabled"; // Estilo del botón
  visible?: boolean; // Indica si el botón debe ser visible o no
}

interface AlertDialogProps {
  title: string;
  subtitle: string;
  content: React.ReactNode; // Acepta JSX
  isOpen: boolean;
  onClose: () => void;
  primaryProps?: ButtonProps; // Propiedades para el primer botón
  secondaryProps?: ButtonProps; // Propiedades para el segundo botón
  iconColor?: string; // Color del ícono
  iconSize?: number; // Tamaño del ícono
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  title,
  subtitle,
  content,
  isOpen,
  onClose,
  primaryProps = {},
  secondaryProps = {},
  iconColor = "white", // Valor predeterminado para el color del ícono
  iconSize = 24, // Valor predeterminado para el tamaño del ícono
}) => {
  if (!isOpen) return null;

  // Desestructuramos las propiedades de los botones
  const {
    type: primaryType = "button", // Valor por defecto para el tipo del primer botón
    onClick: onPrimary,
    text: primaryText = "Confirmar", // Valor por defecto para el texto del primer botón
    variant: primaryVariant = "normal", // Valor por defecto para el estilo del primer botón
    visible: isPrimaryVisible = true, // Valor por defecto: el botón primario es visible
  } = primaryProps;

  const {
    type: secondaryType = "button", // Valor por defecto para el tipo del segundo botón
    onClick: onSecondary,
    text: secondaryText = "Cancelar", // Valor por defecto para el texto del segundo botón
    variant: secondaryVariant = "cancel", // Valor por defecto para el estilo del segundo botón
    visible: isSecondaryVisible = true, // Valor por defecto: el botón secundario es visible
  } = secondaryProps;

  return (
    <div className="alert-overlay" onClick={onClose}>
      <div className="alert-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="alert-header">
          <h3>{title}</h3>
          <p className="alert-subtitle">{subtitle}</p>
          {/* Ícono de cierre */}
          <XMarkIcon
            color={iconColor}
            height={iconSize}
            width={iconSize}
            onClick={onClose} // Cierra el diálogo al hacer clic
            className="close-icon" // Puedes agregar una clase para estilizar el ícono
          />
        </div>
        <div className="alert-body">{content}</div>
        <div className="alert-footer">
          {isSecondaryVisible && (
            <Button
              variant={secondaryVariant}
              onClick={onSecondary}
              type={secondaryType}
            >
              {secondaryText}
            </Button>
          )}
          {isPrimaryVisible && (
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
    </div>
  );
};

export default AlertDialog;
