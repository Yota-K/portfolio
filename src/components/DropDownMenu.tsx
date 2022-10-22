import React, { useState, useEffect } from 'react';
import useDarkMode from 'use-dark-mode';
import { FaMoon, FaSun, FaTv } from 'react-icons/fa';
import { Menu, Transition } from '@headlessui/react';

const DropDownMenu: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const darkMode = useDarkMode(false, {
    classNameDark: 'dark',
    classNameLight: 'light',
  });

  const toggleDarkmode = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      darkMode.enable();
    } else {
      darkMode.disable();
    }
  };

  const localStorageKey = 'darkMode' as const;

  const removeLocalStorageItemForDarkmode = () => {
    // Avoidance "window is not available" error
    const getDarkmode = window.localStorage.getItem(localStorageKey);

    if (getDarkmode !== null) {
      window.localStorage.removeItem(localStorageKey);
      toggleDarkmode();
    }
  };

  useEffect(() => {
    if (!mounted) setMounted(true);

    const getDarkmode = window.localStorage.getItem(localStorageKey);

    if (getDarkmode === null) toggleDarkmode();
  }, [darkMode]);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className={`p-2 rounded-full transition-all ${darkMode.value ? 'hover:bg-white/30' : 'hover:bg-black/10'}`}
      >
        {mounted && (
          <>
            {darkMode.value && <FaMoon className="w-5 h-5 text-yellow-500" />}
            {!darkMode.value && <FaSun className="w-5 h-5 text-orange-500" />}
          </>
        )}
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100 dark:bg-violet-500 dark:text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white `}
                  onClick={darkMode.disable}
                >
                  <FaSun className="w-5 h-5 mr-2 text-orange-500" />
                  Light
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100 dark:bg-violet-500' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white`}
                  onClick={darkMode.enable}
                >
                  <FaMoon className="w-5 h-5 mr-2 text-yellow-500" />
                  Dark
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100 dark:bg-violet-500' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white`}
                  onClick={removeLocalStorageItemForDarkmode}
                >
                  <FaTv className="w-5 h-5 mr-2 text-gray-500" />
                  System
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDownMenu;
