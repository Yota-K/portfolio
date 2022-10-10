import * as React from 'react';
import { Link, HeadFC } from 'gatsby';
import Layout from '~/components/Layout';

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-3">Page not found</h1>
      <Link to="/" className="text-blue-600">
        Go home
      </Link>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
