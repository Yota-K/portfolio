import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-center">
      <span>© 2022〜{new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
