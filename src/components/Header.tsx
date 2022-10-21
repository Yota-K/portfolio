import React from 'react';
import Logo from './Logo';
import DropDownMenu from './DropDownMenu';

const Header: React.FC = () => {
  return (
    <header className="py-3 backdrop-blur bg-white/80 dark:bg-black/80 shadow-lg border-b fixed w-full z-40">
      <div className="flex justify-between items-center mx-auto w-11/12 lg:w-7/12">
        <h1 className="inline-block lg:w-60">
          <Logo />
        </h1>
        <DropDownMenu />
      </div>
    </header>
  );
};

export default Header;
