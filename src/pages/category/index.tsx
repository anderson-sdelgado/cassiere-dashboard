import { gql } from '@apollo/client';
import { initializeApollo } from '../../utils/apollo';
import { useSession } from 'next-auth/react';
import RelationTemplate from '../../templates/RelationTemplate';

const ALL_CATEGORIES = gql`
  query getCategories {
    categories {
      data {
        id
        attributes {
          name
          slug
        }
      }
    }
  }
`;

export default function RelationCategory() {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return <p>Access Denied</p>;
  }

  return <RelationTemplate />;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: ALL_CATEGORIES,
  });

  return {
    props: {
      data: data,
      children: 'React',
    },
  };
}
