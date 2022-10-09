import React from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 bg-amber-50 pt-20">
        <div className="mx-auto w-10/12 lg:w-6/12 ">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
