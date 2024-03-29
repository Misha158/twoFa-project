import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import fetch from "cross-fetch";
import { MockedProvider } from "@apollo/client/testing";
import { TableOrigin } from "../../TableOrigin";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import { ReactTableLib } from "../ReactTableLib";
import { getColumns } from "../columns";
import { GET_TABLE_DATA } from "../graphql/query/tableQuery";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { WithRoute } from "../testHelper/WithRoute";

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

describe("test", () => {
  it("should render Loading....", async () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    render(
      <WithRoute path="/table">
        <TableOrigin />
      </WithRoute>
    );

    expect(await screen.findByText("Loading...")).toBeInTheDocument();
    expect(await screen.findByText("Hello Mishaa")).toBeInTheDocument();
    expect(await screen.getAllByTestId("tableCell")).toHaveLength(3);
  });
});

/*describe("test", () => {
  it("should render table with data", () => {
    const client = new ApolloClient({
      link: new HttpLink({ uri: "http://localhost:5000/graphql", fetch }),
      cache: new InMemoryCache(),
    });

    const data = {
      getReactTable: [
        {
          col1: "Hello",
          col2: "World",
          col3: 10,
          id: "1",
          __typename: "ReactTable",
        },
        {
          col1: "whatever",
          col2: "you want",
          col3: 2,
          id: "3",
          __typename: "ReactTable",
        },
      ],
    };

    const columns = getColumns({
      onClick: async (value) => {
        console.log("onDelete", value.row.original.id);
      },
    });

    render(
      <ApolloProvider client={client}>
        <ReactTableLib data={data} columns={columns} loading={false} />
      </ApolloProvider>
    );
    // expect(screen.getByText("Column 1")).toBeInTheDocument();
    expect(screen.getByTestId("table")).toBeInTheDocument();
    expect(screen.getAllByTestId("tableCell")).toHaveLength(2);
  });
});*/
