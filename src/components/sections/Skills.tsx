import React, { useState } from 'react';
import Button from '~/components/Button';
import Modal from '~/components/Modal';
import SectionRoot from './SectionRoot';
import { SkillInfo, allSkills } from '~/allSkills';

const Skills: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [skillInfo, setSkillInfo] = useState<SkillInfo>({
    title: '',
    yearsOfExperience: '',
    content: '',
  });

  const openSkillInModal = (skill: SkillInfo) => {
    setSkillInfo({
      ...skillInfo,
      title: skill.title,
      yearsOfExperience: skill.yearsOfExperience,
      content: skill.content,
    });
    setIsOpen(true);
  };

  return (
    <SectionRoot heading="Skills">
      {allSkills.map((item) => (
        <div key={item.heading} className="mb-4">
          <h3 className="text-xl font-bold mb-2">{item.heading}</h3>
          <ul className="flex gap-4 flex-wrap">
            {item.skills.map((skill) => (
              <li key={skill.title}>
                <Button className="bg-blue-100 text-blue-900 hover:bg-blue-200" onClick={() => openSkillInModal(skill)}>
                  {skill.title}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Modal
        title={skillInfo.title}
        subTitle={skillInfo.yearsOfExperience}
        content={skillInfo.content}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </SectionRoot>
  );
};

export default Skills;
