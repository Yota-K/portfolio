import React from 'react';
import SectionRoot from './SectionRoot';
import { FaTwitter, FaGithub, FaSpeakerDeck } from 'react-icons/fa';

const Others: React.FC = () => {
  const webInfoList = [
    {
      name: '@karukichi_yah',
      icon: <FaTwitter />,
      url: 'https://twitter.com/karukichi_yah',
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/Yota-K',
    },
    {
      name: 'Speaker Deck',
      icon: <FaSpeakerDeck />,
      url: 'https://speakerdeck.com/soejima0124',
    },
  ];

  return (
    <SectionRoot heading="Others">
      <ul>
        {webInfoList.map((link) => (
          <li key={link.name} className="items-center text-blue-600 last-of-type:pb-0">
            <a
              className="inline-block p-2 cursor-pointer font-bold hover:bg-blue-50 hover:rounded-lg"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-block align-middle pr-2">{link.icon}</span>
              <span>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </SectionRoot>
  );
};

export default Others;
