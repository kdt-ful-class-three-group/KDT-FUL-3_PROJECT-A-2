// src/components/Button.jsx
import React from 'react';

export const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded">
      {label}
    </button>
  );
};
