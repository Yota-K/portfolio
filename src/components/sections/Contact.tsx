import React from 'react';
import SectionRoot from './SectionRoot';

const Contact: React.FC = () => {
  return (
    <SectionRoot heading="Contact">
      <p>
        仕事の依頼は
        <a
          className="text-blue-600 hover:underline"
          href="https://twitter.com/karukichi_yah"
          target="_blank"
          rel="noopener noreferrer"
        >
          TwitterのDM
        </a>
        までお願いします。
      </p>
    </SectionRoot>
  );
};

export default Contact;
