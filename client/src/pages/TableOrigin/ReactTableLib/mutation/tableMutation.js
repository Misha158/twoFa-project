import { gql } from "@apollo/client";

export const CREATE_ROW = gql`
  mutation createRowInTable($input: TableRowInput) {
    createRowInTable(input: $input) {
      col1
      col2
      col3
    }
  }
`;
