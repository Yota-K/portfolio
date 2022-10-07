import React from 'react';
import SectionRoot from './SectionRoot';

const Skills: React.FC = () => {
  const allSkills = [
    {
      heading: 'Languages',
      skills: ['HTML・CSS', 'SCSS', 'JavaScript', 'TypeScript', 'PHP', 'Golang'],
    },
    {
      heading: 'Technologies',
      skills: ['React', 'Vue.js', 'Node.js', 'Laravel', 'WordPress', 'MySQL', 'Docker', 'AWS'],
    },
    {
      heading: 'Editor',
      skills: ['Neovim'],
    },
  ];
  return (
    <SectionRoot heading="Skills">
      {allSkills.map((item) => (
        <div key={item.heading}>
          <h3 className="text-xl font-bold">{item.heading}</h3>
          <ul>
            {item.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </SectionRoot>
  );
};

export default Skills;
