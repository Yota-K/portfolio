import React from 'react';

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button
      type="button"
      className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
