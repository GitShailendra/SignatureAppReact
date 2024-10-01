import React from 'react';

const Button = ({ children, onClick, variant = 'default' }) => {
  const baseStyle = "px-4 py-2 rounded-md text-black font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = {
    default: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    outline: "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-500",
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;