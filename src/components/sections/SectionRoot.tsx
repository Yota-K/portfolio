import React from 'react';

const SectionRoot: React.FC<{ heading?: string; children: React.ReactNode }> = ({ heading, children }) => {
  return (
    <section className="lg:my-6 my-4">
      {heading && (
        <h2 className="relative lg:mb-6 mb-4 text-3xl font-bold before:bg-blue-700 before:absolute before:-bottom-1 before:left-0 before:w-10 before:h-1">
          {heading}
        </h2>
      )}
      {children}
    </section>
  );
};

export default SectionRoot;
