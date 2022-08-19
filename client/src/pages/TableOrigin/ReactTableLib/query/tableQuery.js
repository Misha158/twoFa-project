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

export const GET_TABLE_DATA_FILTERED = gql`
  query getReactTableFiltering($search: String) {
    getReactTableFiltering(search: $search) {
      col1
      col2
      col3
    }
  }
`;
