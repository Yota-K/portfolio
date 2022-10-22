import React from 'react';
import Lottie from 'react-lottie';
import animationData from '~/data/cat.json';
import SectionRoot from './SectionRoot';

// 参考: https://the2g.com/post/easy-animation-with-react-lottie
const Cat: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <SectionRoot>
      <Lottie options={defaultOptions} width={300} height={300} />
    </SectionRoot>
  );
};

export default Cat;
