import React from 'react';
import Lottie from 'react-lottie';
import animationData from '~/data/cat.json';

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
    <div className="m-auto max-w-xs">
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

export default Cat;
