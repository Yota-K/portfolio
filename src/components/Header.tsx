import React from 'react';
import { title } from '~/config/app';

const Header: React.FC = () => {
  return (
    <header className="py-4 shadow-lg ">
      <div className="mx-auto w-11/12 lg:w-7/12">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
