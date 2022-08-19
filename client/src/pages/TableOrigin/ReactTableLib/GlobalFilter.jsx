import React from "react";
import { useAsyncDebounce } from "./useAsyncDebounce";
import { useQuery } from "@apollo/client";
import { GET_TABLE_DATA_FILTERED } from "./query/tableQuery";

export const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  setDataTable,
  loading,
  data,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 500);

  const { data: dataFilter, loading: loadingFilter } = useQuery(
    GET_TABLE_DATA_FILTERED,
    {
      variables: { search: globalFilter },
    }
  );

  React.useEffect(() => {
    if (!loading && !value) {
      setDataTable(data?.getReactTable);
    }

    if (globalFilter) {
      setDataTable(dataFilter?.getReactTableFiltering);
    }
  }, [data, globalFilter, dataFilter]);

  console.log(globalFilter);

  return (
    <div style={{ marginBottom: "10px" }}>
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: "1.1rem",
          border: "0",
        }}
      />
    </div>
  );
};
