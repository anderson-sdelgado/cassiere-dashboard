import { gql } from 'graphql-request';

export const GQL_FRAGMENT_POST = gql`
  fragment contentPost on PostEntity {
    id
    attributes {
      title
      slug
      excerpt
      content
      allowComments
      cover {
        data {
          id
          attributes {
            alternativeText
            url
          }
        }
      }
      author {
        data {
          id
          attributes {
            displayName
            slug
          }
        }
      }
      categories {
        data {
          id
          attributes {
            displayName
            slug
          }
        }
      }
      tags {
        data {
          id
          attributes {
            displayName
            slug
          }
        }
      }
    }
  }
`;
