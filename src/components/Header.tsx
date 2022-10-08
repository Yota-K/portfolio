import React from 'react';
import { title } from '~/config/app';

const Header: React.FC = () => {
  return (
    <header className="py-4 backdrop-blur bg-white/30 shadow-lg border-b fixed w-full z-40">
      <div className="mx-auto w-11/12 lg:w-7/12">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
