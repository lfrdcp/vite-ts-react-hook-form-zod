import React, { useEffect, useState } from "react";
import "./Toast.css";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Iniciar el proceso de cierre después de la duración especificada
    const timer = setTimeout(() => {
      setIsClosing(true); // Iniciar la animación de salida
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  // Eliminar el Toast del DOM después de que termine la animación de salida
  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        if (onClose) onClose();
      }, 300); // Duración de la animación de salida (debe coincidir con CSS)

      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  return (
    <div className={`toast toast-${type} ${isClosing ? "toast-exit" : ""}`}>
      <div className="toast-message">{message}</div>
    </div>
  );
};

export default Toast;
