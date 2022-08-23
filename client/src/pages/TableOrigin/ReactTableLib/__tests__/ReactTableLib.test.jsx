import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import fetch from "cross-fetch";
import { TableOrigin } from "../../TableOrigin";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import { ReactTableLib } from "../ReactTableLib";
import { getColumns } from "../columns";

describe("test", () => {
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
});
