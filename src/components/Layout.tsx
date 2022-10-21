import React from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-red-200">
      <Header />
      <main className="flex-1 bg-amber-50 pt-20 dark:bg-gray-900 dark:text-white">
        <div className="mx-auto w-10/12 lg:w-6/12 ">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
