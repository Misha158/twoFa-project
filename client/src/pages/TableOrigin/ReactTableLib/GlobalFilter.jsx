import React from "react";
import { useTable } from "react-table";
import { useAsyncDebounce } from "./useAsyncDebounce";
import { useQuery } from "@apollo/client";
import { GET_TABLE_DATA_FILTERED } from "./query/tableQuery";

export const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  setDataTableFiltered,
  setDataTable,
  loading,
  data,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 500);

  const {
    data: dataFilter,
    loading: loadingFilter,
    error: errorFilter,
    refetch: refetchFilter,
  } = useQuery(GET_TABLE_DATA_FILTERED, { variables: { search: value } });

  React.useEffect(() => {
    console.log(!value);
    if (!value && !loading) {
      console.log("works");
      setDataTableFiltered(data?.getReactTable);
    }
    console.log("request on server", dataFilter?.getReactTableFiltering);
    setDataTableFiltered(dataFilter?.getReactTableFiltering);
  }, [data, globalFilter]);

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
