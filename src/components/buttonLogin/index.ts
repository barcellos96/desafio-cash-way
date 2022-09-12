import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BootstrapButton = styled(Button)({
  width: "80%",
  height: "30px",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#369293",
  borderColor: "#369293",
  color: "#000",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "rgba(54, 146, 147,.9)",
    borderColor: "#369293",
    boxShadow: "none",
    color: "#FFF",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#369293",
    borderColor: "#369293",
  },
  "&:focus": {
    backgroundColor: "0 0 0 0.2rem rgba(54, 146, 147,.3)",
  },
});
