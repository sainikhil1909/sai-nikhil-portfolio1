import React, { useEffect } from "react";
import "./CustomAlert.css";

function CustomAlert({
  message,
  type,
  onClose
}) {

  useEffect(() => {

    if (!message) return;

    const timer = setTimeout(() => {
        onClose();
    }, 5000);

    return () => clearTimeout(timer);

}, [message, onClose]);
if (!message) return;
  return (

    <div className={`custom-alert ${type}`}>

      <span>{message}</span>

      <button onClick={onClose}>
        ✕
      </button>

    </div>

  );

}

export default CustomAlert;