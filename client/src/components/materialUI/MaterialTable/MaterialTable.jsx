import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./columns";

export const MaterialTable = () => {
  return (
    <div style={{ height: 400, width: "100%", backgroundColor: "aqua" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};
