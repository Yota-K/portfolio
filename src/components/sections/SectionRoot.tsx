import React from 'react';

const SectionRoot: React.FC<{ heading: string; children: React.ReactNode }> = ({ heading, children }) => {
  return (
    <section className="my-6">
      <h2 className="mb-4 text-3xl font-bold" id={`#${heading.toLowerCase()}`}>
        {heading}
      </h2>
      <div>{children}</div>
    </section>
  );
};

export default SectionRoot;
