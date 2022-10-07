import React from 'react';
import { HeadFC } from 'gatsby';
import Layout from '~/components/Layout';
import { Profile, Career, Skills, Others, Contact } from '~/components/sections';

const Top: React.FC = () => {
  return (
    <Layout>
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
    <title>Karukichi Soejima Portfolio</title>
    <meta name="description" content="Karukichi Soejima's portfolio site." />
  </>
);
