import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { TableOrigin } from "../../TableOrigin";
import { GET_TABLE_DATA } from "../graphql/query/tableQuery";

const mocks = [
  {
    request: {
      query: GET_TABLE_DATA,
    },
    result: {
      data: {
        getReactTable: [
          {
            col1: "Hello Mishaa",
            col2: "World",
            col3: 10,
            id: "1",
          },
          {
            col1: "Paula",
            col2: "World",
            col3: 10,
            id: "2",
          },
          {
            col1: "Hi",
            col2: "World",
            col3: 10,
            id: "3",
          },
        ],
      },
    },
  },
];

export const WithRoute = ({ children, path }) => {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path={path} element={children} />
        </Routes>
      </MemoryRouter>
    </MockedProvider>
  );
};
