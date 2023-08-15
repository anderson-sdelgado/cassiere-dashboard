import { gql, useQuery } from '@apollo/client';
import Home, { HomeTemplateProps } from '../templates/Home';
import { initializeApollo } from '../utils/apollo';
import { useSession } from 'next-auth/react';

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

export default function Index(props: HomeTemplateProps) {
  const { data: session, status } = useSession();
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
  // if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>;
  // return <pre></pre>;
  // return <Home />;
}

export async function getStaticProps() {
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
