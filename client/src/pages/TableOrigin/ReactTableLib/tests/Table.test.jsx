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

import { MemoryRouter, BrowserRouter, Route, Routes } from "react-router-dom";

describe("test", () => {
  it("should test", () => {
    const client = new ApolloClient({
      link: new HttpLink({ uri: "http://localhost:5000/graphql", fetch }),
      cache: new InMemoryCache(),
    });

    render(
      <ApolloProvider client={client}>
        <ReactTableLib />
      </ApolloProvider>
    );
    // expect(screen.getByText("Column 1")).toBeInTheDocument();
    expect(screen.getByTestId("table")).toBeInTheDocument();
  });
});
