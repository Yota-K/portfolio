import React from 'react';
import SectionRoot from './SectionRoot';

const Others: React.FC = () => {
  const webInfoList = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/karukichi_yah',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Yota-K/portfolio',
    },
    {
      name: '技術ブログ',
      url: 'https://karukichi-blog.netlify.app/',
    },
    {
      name: 'Qiita',
      url: 'https://qiita.com/powdersugar828828',
    },
    {
      name: 'Speaker Deck',
      url: 'https://speakerdeck.com/soejima0124',
    },
  ];

  return (
    <SectionRoot heading="Others">
      <ul>
        {webInfoList.map((link) => (
          <li key={link.name}>
            <a href={link.url} className="cursor-pointer font-bold">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </SectionRoot>
  );
};

export default Others;
