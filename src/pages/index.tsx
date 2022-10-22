import React from 'react';
import { HeadFC } from 'gatsby';
import Layout from '~/components/Layout';
import { Cat, Profile, Career, Skills, Others, Contact } from '~/components/sections';
import { title } from '~/config/app';

const Top: React.FC = () => {
  return (
    <Layout>
      <Cat />
      <Profile />
      <Career />
      <Skills />
      <Others />
      <Contact />
    </Layout>
  );
};

export default Top;

export const Head: HeadFC = () => (
  <>
    <title>{title}</title>
    <meta name="description" content="Karukichi Soejima's portfolio site." />
  </>
);
