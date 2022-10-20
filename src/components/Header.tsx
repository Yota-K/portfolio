import React from 'react';
import Logo from './Logo';
import DropDownMenu from './DropDownMenu';

const Header: React.FC = () => {
  return (
    <header className="py-4 backdrop-blur bg-white/30 dark:bg-black/30 shadow-lg border-b fixed w-full z-40">
      <div className="flex justify-between mx-auto w-11/12 lg:w-7/12">
        <h1 className="inline-block lg:w-60">
          <Logo />
        </h1>
        <DropDownMenu />
      </div>
    </header>
  );
};

export default Header;
