import { Box, Avatar } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../providers/login";

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
      <Avatar
        sx={{
          height: "45px",
          width: "45px",
          cursor: "pointer",
        }}
      />
      <button onClick={handleLogout}>sair</button>
    </Box>
  );
}
