import React, { useState, useEffect } from 'react';

const CustomNotification = ({ message, type, onClose, duration = 3000 }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isHovered, onClose, duration]);

  const getNotificationStyle = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div
      className={`absolute top-0 left-0 right-0 mx-auto mt-4 px-4 py-2 rounded ${getNotificationStyle()} shadow-lg z-50`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 font-bold">
          &times;
        </button>
      </div>
    </div>
  );
};

export default CustomNotification;
