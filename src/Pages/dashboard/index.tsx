import React from "react";
import { Box, Button, ListItem } from "@mui/material";
import { items } from "../../components/itemsButtonSideBar";
import Logo from "../../assets/logo.svg";
import HeaderBar from "../../components/headerBar";
import SimplePaper from "../../components/cardData";

const DashboardPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          bgcolor: "#111827",
          flexDirection: "column",
          minWidth: "20%",
          height: "100vh",
        }}
      >
        <img src={Logo} alt="logo empresa cash way" />

        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {items.map((item) => (
            <Button
              key={item.title}
              sx={{
                display: "flex",
                backgroundColor: "rgba(255,255,255, 0.08)",
                borderRadius: 1,
                color: "#FFF",
                alignText: "start",
                fontWeight: "fontWeightBold",
                textTransform: "none",
                width: "100%",
                marginBottom: "20px",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255, 0.2)",
                },
                "&:focus": {
                  backgroundColor: "rgba(255,255,255, 0.2)",
                },
              }}
            >
              {item.title}
            </Button>
          ))}
        </ListItem>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <HeaderBar />
        <SimplePaper />
      </Box>
    </Box>
  );
};

export default DashboardPage;
