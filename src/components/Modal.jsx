import React from "react";

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Modal;
