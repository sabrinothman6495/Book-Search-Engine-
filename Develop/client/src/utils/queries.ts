import { gql } from '@apollo/client';



export const GET_ME = gql`
   {
    me {
    bookId
    authors
    description
    title
    image
    link
      }
    }
  }
`;