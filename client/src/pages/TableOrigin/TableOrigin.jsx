import React, { useState } from "react";
import { Card, Layout } from "../../components";
import { useMutation, useQuery } from "@apollo/client";
import { ReactTableLib } from "./ReactTableLib/ReactTableLib";
import { GET_TABLE_DATA } from "./ReactTableLib/graphql/query/tableQuery";
import { DELETE_ROW } from "./ReactTableLib/graphql/mutation/tableMutation";
import { getColumns } from "./ReactTableLib/columns";

export const TableOrigin = () => {
  const { data, loading, error, refetch } = useQuery(GET_TABLE_DATA);

  const [deleteRow] = useMutation(DELETE_ROW);
  const columns = React.useMemo(() => {
    return getColumns({
      onClick: async (value) => {
        await deleteRow({
          variables: {
            input: value.row.original.id,
          },
        });

        await refetch();
      },
    });
  }, []);

  return (
    <Layout>
      <Card>
        {loading ? (
          "Loading..."
        ) : (
          <ReactTableLib
            data={data}
            loading={loading}
            error={error}
            refetch={refetch}
            columns={columns}
          />
        )}
      </Card>
    </Layout>
  );
};
