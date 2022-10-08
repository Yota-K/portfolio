import React from 'react';
import { title } from '~/config/app';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-center bg-amber-50">
      <span>
        © 2022〜{new Date().getFullYear()} {title}
      </span>
    </footer>
  );
};

export default Footer;
