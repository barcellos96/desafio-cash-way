import { Box, Avatar, Button, TextField } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../providers/login";
import { BootstrapButton } from "../buttonLogin";

import CustomizedInputBase from "../buttonSearch";

export default function HeaderBar() {
  const auth = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.Logout();
    navigate("/");
    // window.location.href = window.location.href;
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "80px",
        width: "100%",
        justifyContent: "space-around",
        bgcolor: "#FFF",
        borderRadius: "10px",
        alignItems: "center",
        boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.10)",
      }}
    >
      <CustomizedInputBase />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "10%",
        }}
      >
        <Avatar
          sx={{
            height: "45px",
            width: "45px",
            cursor: "pointer",
          }}
        />
        <Box
          component="a"
          sx={{
            margin: "0 auto",
            borderRadius: 1,
            color: "#504d4d",
            alignText: "start",
            fontSize: "20px",
            fontWeight: "bold",
            textTransform: "none",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          onClick={handleLogout}
        >
          sair
        </Box>
      </Box>
    </Box>
  );
}
