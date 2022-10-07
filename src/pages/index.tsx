import React from 'react';
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
