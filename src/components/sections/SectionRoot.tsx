import React from 'react';

const SectionRoot: React.FC<{ heading: string; children: React.ReactNode }> = ({ heading, children }) => {
  return (
    <section>
      <h2 className="my-8" id={`#${heading.toLowerCase()}`}>
        {heading}
      </h2>
      <div>{children}</div>
    </section>
  );
};

export default SectionRoot;
