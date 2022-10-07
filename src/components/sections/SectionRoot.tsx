import React from 'react';

const SectionRoot: React.FC<{ heading: string; children: React.ReactNode }> = ({ heading, children }) => {
  return (
    <section className="lg:my-6 my-4">
      <h2 className="lg:mb-4 mb-2  text-3xl font-bold" id={`#${heading.toLowerCase()}`}>
        {heading}
      </h2>
      <div>{children}</div>
    </section>
  );
};

export default SectionRoot;
