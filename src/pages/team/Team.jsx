import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();

  // field ==> Reqird
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center", // Center horizontally
              alignItems: "center", // Center vertically
              width: "100%", // Make it take full width if needed
            }}
          >
            <Box
              sx={{
                p: "5px",
                width: "99px",
                borderRadius: "3px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                mt: "15px",
                backgroundColor:
                  access === "Admin"
                    ? theme.palette.primary.dark
                    : access === "Manager"
                    ? theme.palette.secondary.dark
                    : "#3da58a",
              }}
            >
              {access === "Admin" && (
                <AdminPanelSettingsOutlined
                  sx={{ color: "#fff" }}
                  fontSize="small"
                />
              )}
              {access === "Manager" && (
                <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
              )}
              {access === "User" && (
                <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
              )}

              <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                {access}
              </Typography>
            </Box>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />

      <Box sx={{ height: 600, mx: "auto" }}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Team;
