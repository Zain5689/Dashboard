import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./data";
import Header from "../../components/Header";

const Contacts = () => {
  return (
    <Box>
      <Header title="INVOCES" subTitle="List of Invoice Balances" />

      <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
        <DataGrid
          checkboxSelection
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
