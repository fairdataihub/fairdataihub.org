import { GetServerSideProps } from 'next';

// Redirect to blog page
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: `/blog`,
      permanent: true, // 301 redirect
    },
  };
};

// This component will never render due to the redirect
const Authors = () => {
  return null;
};

export default Authors;
