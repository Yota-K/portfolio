import React from 'react';
import SectionRoot from './SectionRoot';

const Contact: React.FC = () => {
  return (
    <SectionRoot heading="Contact">
      <p>
        仕事の依頼は
        <a href="mailto:powdersugar828828@gmail.com">powdersugar828828@gmail.com</a>
        かTwitterのDMまでお願いします。
      </p>
    </SectionRoot>
  );
};

export default Contact;
