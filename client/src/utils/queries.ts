import { gql } from '@apollo/client';



export const GET_ME = gql`
  query GetMe {
    me {
      bookId
      authors
      description
      title
      image
      link
    }
  }
`;

//added to resolve issues with "searchBooks" query
export const SEARCH_BOOKS = gql`
  query searchBooks($query: String!) {
    searchBooks(query: $query) {
      bookId
      authors
      description
      title
      image
      link
    }
  }
`;