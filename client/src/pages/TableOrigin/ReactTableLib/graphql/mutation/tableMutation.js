import { gql } from "@apollo/client";

export const CREATE_ROW = gql`
  mutation createRowInTable($input: TableRowInput) {
    createRowInTable(input: $input) {
      col1
      col2
      col3
      id
    }
  }
`;

export const DELETE_ROW = gql`
  mutation deleteRowInTable($input: ID) {
    deleteRowInTable(input: $input) {
      col1
      col2
      col3
      id
    }
  }
`;
