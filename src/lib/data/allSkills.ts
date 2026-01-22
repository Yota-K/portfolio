export type SkillInfo = {
  title: string;
};

// Skillsというセクションで使用するスキルごとの情報をまとめた配列
export const All_SKILLS: {
  heading: string;
  skills: SkillInfo[];
}[] = [
  {
    heading: 'Languages',
    skills: [
      { title: 'HTML・CSS' },
      { title: 'JavaScript' },
      { title: 'TypeScript' },
      { title: 'PHP' },
      { title: 'Go' },
      { title: 'Lua' }
    ]
  },
  {
    heading: 'Technologies',
    skills: [
      { title: 'React' },
      { title: 'Next.js' },
      { title: 'Vue.js' },
      { title: 'Node.js' },
      { title: 'NestJS' },
      { title: 'MySQL' },
      { title: 'PostgreSQL' },
      { title: 'GraphQL' },
      { title: 'Laravel' },
      { title: 'WordPress' },
      { title: 'Docker' },
      { title: 'AWS' },
      { title: 'Terraform' },
      { title: 'Figma' }
    ]
  },
  {
    heading: 'Editor',
    skills: [{ title: 'Vim・Neovim' }]
  }
];
