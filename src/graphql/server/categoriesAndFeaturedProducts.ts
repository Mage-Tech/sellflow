import gql from 'graphql-tag';

export const GET_CATEGORIES_AND_FEATURED_PRODUCTS = gql`
  query GetCategoriesAndFeaturedProducts {
    collections(first: 10) {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
    products(first: 10) {
      edges {
        node {
          id
          title
          handle
          presentmentPriceRanges(first: 1) {
            edges {
              node {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
          images(first: 1) {
            edges {
              node {
                id
                originalSrc
              }
            }
          }
        }
      }
    }
  }
`;
