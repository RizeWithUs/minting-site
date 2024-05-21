import React, { useState, useEffect } from "react";

const ModalContainer = ({ render, isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(onClose, 300);
    }
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div
        className={`bg-white w-1/3 p-8 z-10 rounded-lg shadow-lg relative transform transition-all duration-300 ease-in-out ${
          isAnimating
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-full opacity-0 scale-75"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={onClose}
        >
          &#10006;
        </button>
        <div>{render()}</div>
      </div>
    </div>
  );
};

export default ModalContainer;
