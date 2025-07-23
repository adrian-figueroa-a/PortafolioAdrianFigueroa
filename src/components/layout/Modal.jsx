import "../layout/Modal.css";
import React, { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setAnimatingOut(false);
    } else if (shouldRender) {
      setAnimatingOut(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setAnimatingOut(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      className={`modal-overlay ${animatingOut ? "fade-out" : "fade-in"}`}
      onClick={onClose}
    >
      <div
        className={`modal-contenido ${animatingOut ? "slide-out" : "slide-in"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <div className="closeButton">
          <button className="btn-primary" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
