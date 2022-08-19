import { gql } from "@apollo/client";

export const GET_TABLE_DATA = gql`
  query {
    getReactTable {
      col1
      col2
      col3
    }
  }
`;
