import { gql } from "@apollo/client";

export const GET_TABLE = gql`
  query {
    getTable {
      name
      surname
      age
      time
    }
  }
`;
