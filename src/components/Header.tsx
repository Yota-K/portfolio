import React from 'react';
import Logo from './Logo';
import DropDownMenu from './DropDownMenu';

const Header: React.FC = () => {
  return (
    <header className="py-2 backdrop-blur bg-white/60 dark:bg-black/60 shadow-lg border-b fixed w-full z-40">
      <div className="flex justify-between items-center mx-auto w-11/12 lg:w-7/12">
        <h1 className="inline-block lg:w-60 py-2">
          <Logo />
        </h1>
        <DropDownMenu />
      </div>
    </header>
  );
};

export default Header;
