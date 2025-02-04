import React, { useState, useImperativeHandle, forwardRef } from "react";
import Toast from "./Toast";
import "./Toast.css";

interface ToastMessage {
  id: number;
  message: string;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
}

export interface ToastContainerHandle {
  addToast: (
    message: string,
    type: ToastMessage["type"],
    duration?: number
  ) => void;
}

const ToastContainer = forwardRef<ToastContainerHandle, object>((_, ref) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (
    message: string,
    type: ToastMessage["type"],
    duration = 3000
  ) => {
    const newToast: ToastMessage = {
      id: Date.now(), // Usamos un timestamp como ID único
      message,
      type,
      duration,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  // Exponemos la función addToast al componente padre
  useImperativeHandle(ref, () => ({
    addToast,
  }));

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
});

ToastContainer.displayName = "ToastContainer"; // Asignar un nombre al componente

export default ToastContainer;
